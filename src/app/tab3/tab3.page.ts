import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Mensaje } from '../models/interfaces.models';
import { ServicesService } from '../service/services.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  mensajes: Mensaje[] = [];
  newMensaje: Mensaje = {
    id: this.data.getId(),
    mensaje: '',
    fecha: new Date()
  };
  
  private path = 'Comentario/';

  favorito:boolean = false;

  constructor(public data: ServicesService,  public actionSheetController: ActionSheetController) {this.getMensaje();}


  like(){
    this.favorito = !this.favorito;
  }
  
  guardarMensaje(){
    this.data.createDoc(this.newMensaje, this.path, this.newMensaje.id);
    this.newMensaje ={
      id: this.data.getId(),
      mensaje: '',
      fecha: new Date()
    };
  }

  getMensaje(){
    this.data.getCollection<Mensaje>(this.path).subscribe(rep =>{
      this.mensajes = rep;
    });
  }

  delete(c: Mensaje){
    this.data.deleteDoc(this.path, c.id);
  }
  
}



