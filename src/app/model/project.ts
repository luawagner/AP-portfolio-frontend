export class Project {

  id? : number;
  nombreP: string;
  descriptionP : string;
  imgP: string;
  githubP: string;
  urlP:string;

constructor(nombreP: string, descriptionP: string, imgP: string, githubP: string, urlP: string){
  this.nombreP = nombreP;
  this.descriptionP = descriptionP;
  this.imgP = imgP;
  this.githubP = githubP;
  this.urlP = urlP
}

}
