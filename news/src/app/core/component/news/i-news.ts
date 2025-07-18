interface INews{
  image: IImage;
  link:ILink;
  title:string ;
  date: Date;
}
interface IImage{
  id:number;
  fileName:string;
  filePath:string;
}
interface ILink{
  id:string;
  name:string;
  link:string;
}