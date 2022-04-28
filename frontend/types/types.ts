export interface Signatory {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  job: string,
  adress: string,
  city: string,
  zip: string,
  hide: boolean
}
export enum Status {
  Err = "error",
  Success = "success"

}

export interface RestResponse {
  status: Status,
  data: Signatory[],
  error: string
  more: boolean
}

export class RestResponseCount {
  status: Status = Status.Success;
  data: number = 0;
  error = "";
}
