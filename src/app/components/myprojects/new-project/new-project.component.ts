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
  githubP: string='';
  urlP: string='';



  constructor(private sProject: SProjectService, private router: Router, private activatedRouter: ActivatedRoute,
    public  imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.clearUrl()

  }

onCreate():void{

  this.ImgP = this.imageService.url
  const project = new Project(this.nombreP, this.descriptionP, this.ImgP, this.githubP, this.urlP);
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
