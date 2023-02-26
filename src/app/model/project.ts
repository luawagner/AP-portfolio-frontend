export class Project {

  id?: number;
  nombreP: string;
  descriptionP: string;
  imgP: string;
  urlP:string;
  githubP: string;

constructor(nombreP: string, descriptionP: string, imgP: string, urlP: string, githubP: string){
  this.nombreP = nombreP;
  this.descriptionP = descriptionP;
  this.imgP = imgP;
  this.urlP = urlP;
  this.githubP = githubP

}

}
