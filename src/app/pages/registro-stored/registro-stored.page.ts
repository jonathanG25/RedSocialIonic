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
  texto


  constructor(
    public modalCtrl:ModalController, 
    public alertController: AlertController,
    public dataService: DataService){}
  
  ngOnInit(){
  }

  async add(){
    this.newTaskObj = ({texto:this.texto})
    let uid = this.texto

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
