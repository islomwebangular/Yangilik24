export interface IResponse<T>{
  status:string;
  totalResults:number;
  articles: T
}