import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertaControle: AlertController) {}

  async adicionarTarefa(){
    const ALERTA = await this.alertaControle.create({
      header: 'Qual tarefa quer incluir?',
      inputs: [
        {
          name:'tarefa' ,
          type: 'text',
          placeholder: 'Digite a tarefa'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('cancelou');
          }
        },
        {
          text: 'Adicionar',
          handler: () => {
            console.log('adicionado');
          }
        }
      ]
    });

    ALERTA.present();
  }

  ler(){
    
  }
}
