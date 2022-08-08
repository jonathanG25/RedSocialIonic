import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList, ModalController } from '@ionic/angular';
import { ModalComentarioPage } from '../pages/modal-comentario/modal-comentario.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonList) ionlist: IonList;

  public comentarios : any =[
    {
      id:1,
      comentario: 'Comentarios-------'
    }
  ];
  public nuevocomentario= {id:0,comentario:''};

  constructor(
    public modalController: ModalController,
    public alertController: AlertController ) { }

  ngOnInit() {
  }

  eliminar(indice){
    this.Drop(indice);
    this.ionlist.closeSlidingItems();
  }
  async AbrirModal(c){
    this.ionlist.closeSlidingItems();
    console.log(c);
    const modal = await this.modalController.create({
      component: ModalComentarioPage,
      componentProps: {
        'comentario': c.comentario
      }
      
    });
    await modal.present();
    // recuperar informacion del modal
    var {data}=await modal.onWillDismiss();
    if (data!=undefined){
      if(c.id==0){
        data.id=new Date().getTime();
        this.comentarios.push(data);
      }else{
        c.comentario=data.comentario;
      }
    }
  }
  async Drop(indice) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ALERT!!!',
      message: '¿Esta seguro de eliminar el comentario',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ACEPTAR',
          handler: () => {
            this.comentarios.splice(indice, 1);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
