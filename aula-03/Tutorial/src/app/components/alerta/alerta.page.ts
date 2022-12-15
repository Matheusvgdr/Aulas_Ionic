import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async exibir() {
    const mensagem = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensagem importante',
      message: 'Olá usuário <3',
      buttons: ['OK']
    });

    mensagem.present();
  }

  async exibirCustom() {
    const mensagem = await this.alertController.create({
      header: 'Alerta ',
      message: 'Deseja realmente sair?',
      buttons: ['OK', 'cancelar']
    });

    mensagem.present();
  }

  async exibirComplete() {
    const mensagem = await this.alertController.create({
      header: 'Confirma',
      message: 'Confirma a gravação?',
      buttons: [
        {
          text: "ok",
          handler: ()=>{
            console.log("vou gravar")
          }
        }, 
        {
          text:"cancelar",
          handler: ()=>{
            console.log("cancelar");
          }
        }
      ]
    });
    mensagem.present();
  }
  

}
