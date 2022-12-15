import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {

  constructor(private acao: ActionSheetController) { }

  ngOnInit() {
  }

  async exibir() {
    const ACTIONSHEET = await this.acao.create({
      header: "Fotos",
      buttons: [
        {
          text: 'Apagar',
          icon: 'trash',
          handler: () => {
            console.log("clickou em apagar");
          }
        },
        {
          text: 'Compartilhar',
          icon: 'share',
          handler: () => {
            console.log('clickou em compartilhar');
          }
        },
        {
          text: 'Exibir',
          icon: 'camera',
          handler: () => {
            console.log('clickou em exibir');
          }
        }
      ]
    });

    ACTIONSHEET.present();
  }

}
