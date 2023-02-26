import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageService } from 'src/app/service/image.service';
import { SProjectService } from 'src/app/service/s-project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  nombreP: string = '';
  descriptionP: string= '';
  ImgP: string = '';
  urlP: string='';
  githubP: string='';



  constructor(private sProject: SProjectService, private router: Router, public  imageService: ImageService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.imageService.clearUrl()

  }

onCreate():void{
  const urlFirebase= this.imageService.url;

  this.ImgP = urlFirebase;
  const project = new Project(this.nombreP, this.descriptionP, this.ImgP, this.urlP, this.githubP);
  this.sProject.save(project).subscribe(
    data =>{
      alert("Projecto añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
  )

}


uploadImage($event: any){

  const name = "img_" + Date.now() ;
  this.imageService.uploadImage($event, name)
}

}
