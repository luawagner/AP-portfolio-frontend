import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  imgE: string;

  constructor(private educacionS: EducacionService, private router: Router, public  imageService: ImageService,  private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.imageService.clearUrl()
  }

  onCreate(): void{
    const urlFirebase= this.imageService.url;

    this.imgE = urlFirebase;
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.imgE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){

    const name = "img_" + Date.now() ;
    this.imageService.uploadImage($event, name)
  }

}
