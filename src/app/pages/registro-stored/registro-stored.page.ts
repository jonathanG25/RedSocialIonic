import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-registro-stored',
  templateUrl: './registro-stored.page.html',
  styleUrls: ['./registro-stored.page.scss'],
})
export class RegistroStoredPage implements OnInit {

  newTaskObj = {}
  nombre


  constructor(public modalCtrl:ModalController, public alertController: AlertController, public dataService: DataService){}
  
  ngOnInit(){
  }

  async add(){
    this.newTaskObj = ({nombre:this.nombre})
    let uid = this.nombre

    if(uid){
      await this.dataService.addTask(uid,this.newTaskObj)
    }else{
      this.mensaje6();
    }
    this.dismis()
  }

  async dismis(){
    await this.modalCtrl.dismiss(this.newTaskObj)
  }

  //ALERTAS 

  async mensaje() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ESPERA!',
      message: 'Ingresa el NOMBRE porfavor',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ESPERA!',
      message: 'Ingresa el precio porfavor',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje3() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ESPERA!',
      message: 'Ingresa la descripcion porfavor',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje4() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'GENIAL!',
      message: 'Guardado Correctamente',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje5() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'GENIAL!',
      message: 'Modificado Correctamente',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje6() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      message: 'Todos los campos son obligatorios.',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

}
