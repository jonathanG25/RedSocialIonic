import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ActualizarStoredPage } from '../pages/actualizar-stored/actualizar-stored.page';
import { RegistroStoredPage } from '../pages/registro-stored/registro-stored.page';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  productos=[]

  constructor(
    public modalCtrl: ModalController,
    public dataService: DataService,
    public alertController: AlertController){
    this.getAllTask();
  }

  async addNewItem(){
    const modal = await this.modalCtrl.create({
      component: RegistroStoredPage
    })
    modal.onDidDismiss().then(newTask => {
      this.getAllTask()
    })
    return await modal.present()
  }

  getAllTask(){
    this.productos = this.dataService.getAllTask()
  }

  eliminar(key){
    this.mensaje(key);
  }

  async update(selectedTask){
    const modal = await this.modalCtrl.create({
      component: ActualizarStoredPage,
      componentProps: {task: selectedTask}
    })
    modal.onDidDismiss().then(newTask => {
      this.getAllTask()
    })
    return await modal.present()
  }

 
  async mensaje(key) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ESPERA!',
      message: '¿Estás seguro de que quieres eliminar la nota?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.dataService.deleteTask(key)
            this.getAllTask()
            this.mensaje2();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'GENIAL!',
      message: 'Eliminado Correctamente',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  //form
  async mensaje3() {
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

  async mensaje4() {
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

  async mensaje5() {
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

  async mensaje6() {
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

  async mensaje7() {
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
}

