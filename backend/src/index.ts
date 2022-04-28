import {createConnection, getRepository, Repository} from "typeorm"
import {Signatory} from "./entity/Signatory"

import Express from 'express'


const app = Express()
const port = 3000

enum Status {
  Err = "error",
  Success = "success"

}

class RestResponse {
  status: Status = Status.Success;
  data: Signatory[] = [];
  error = "";
  more = false;
}

class RestResponseCount {
  status: Status = Status.Success;
  data: number = 0;
  error = "";
}

const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const main = async () => {
  console.log(process.env.DB_HOST)
  await createConnection()
  const signatoryRepo = getRepository(Signatory)

  app.use(Express.json({inflate: true, strict: false, type: () => {return true;}}));

  app.get('/count', (_, res) => {
    Signatory.count().then(val => {
      res.json({
        status: Status.Success,
        data: val
      } as RestResponseCount)
    })
  })

  app.get('/signatories', (req, res) => {
    const take = 10
    var skip = 0
    var query = signatoryRepo.createQueryBuilder('s')
      .select(["s.id", "s.firstName", "s.lastName", "s.job", "s.city"])
      .where("hide = false")
      .orderBy({id: 'DESC'})
    if (req.query.skip) {
      skip = Number(req.query.skip)
      query = query.skip(skip)
        .take(take)
    }
    query.getMany().then((signatories) => {
      Signatory.count({where: {hide: false}}).then(count => {
        res.json({status: Status.Success, data: signatories, more: count > skip + take} as RestResponse)
      })
    })
  })



  app.post('/sign', (req, res) => {
    const signatory = req.body as Signatory
    Signatory.findOne({where: {email: signatory.email}}).then(exSignatory => {
      if (exSignatory) {
        res.json({
          status: Status.Err,
          error: "Tuto petici jste již podepsali."
        } as RestResponse)
      } else {
        if (validateEmail(signatory.email)) {
          signatoryRepo.save(signatory);
          res.json({
            status: Status.Success
          } as RestResponse)

        } else {
          res.json({
            status: Status.Err,
            error: "Neplatný email"
          } as RestResponse)
        }
      }


    }).catch(err => {
      console.log(err)
    })
  })

  app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
}



main()
