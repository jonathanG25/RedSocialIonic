import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-comentario',
  templateUrl: './modal-comentario.page.html',
  styleUrls: ['./modal-comentario.page.scss'],
})
export class ModalComentarioPage implements OnInit {
  @Input() comentario: string;

  constructor(
    public modalController: ModalController,
    public alertController: AlertController
    ) { }


    ngOnInit() {
    }
    cerrarModal(){
      this.modalController.dismiss(); 
    }
    guardarDatos(){
      var name =(<HTMLInputElement>document.getElementById("txtcomentario")).value;
      if (name==""){
        this.Alert('Por favor Escriba un comentario');
      }else{
        this.modalController.dismiss({  
          comentario: name,
      });
      }
    }
    async Alert(msj) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ALERT!!!',
        message: msj,
        buttons: ['OK']
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role); 
      
    }
    
  }