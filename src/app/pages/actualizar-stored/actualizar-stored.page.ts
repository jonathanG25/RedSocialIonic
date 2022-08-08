import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-actualizar-stored',
  templateUrl: './actualizar-stored.page.html',
  styleUrls: ['./actualizar-stored.page.scss'],
})
export class ActualizarStoredPage implements OnInit {

  @Input() task;

  newTaskObj = {}
  texto



  constructor(
    public modalCtrl:ModalController, 
    public alertController: AlertController, 
    public dataService: DataService){}
  
  ngOnInit(){
    this.texto = this.task.value.texto
  }

  async dismis(){
    await this.modalCtrl.dismiss()
  }

  async update(){
    this.newTaskObj = ({texto:this.texto})
    let uid = this.task.key
    await this.dataService.updateTask(uid,this.newTaskObj)
    this.dismis()
  }

}
