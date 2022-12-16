import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { format } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertaControle: AlertController, private toast: ToastController) { }

  mensagens = [
    { mensagem: 'Comprar pão' },
    { mensagem: 'Tomar banho' },
    { mensagem: 'Escovar os dentes' }
  ]

  async adicionarTarefa() {
    const ALERTA = await this.alertaControle.create({
      header: 'Qual tarefa quer incluir?',
      inputs: [
        {
          name: 'tarefa',
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
          handler: (form) => {
            this.exibirValorInput(form.tarefa);
          }
        }
      ]
    });

    ALERTA.present();
  }

  //* ----------- FUNÇÔES ----------------
  async exibirValorInput(tarefaNova: string) {

    if (tarefaNova.trim().length < 1) {

      const TOAST = await this.toast.create({
        message: 'Você não digitou uma tarefa',
        duration: 2000,
        position: 'top',
        color: 'dark'
      });

      TOAST.present();

    } else {
      this.mensagens.push({ mensagem: tarefaNova });
    }
  }

  async apagar(index: number) {
    const ALERTA = await this.alertaControle.create({
      header: 'Deseja realmente excluir?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('cancelou');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.mensagens.splice(index, 1);
          }
        }
      ]
    });

    ALERTA.present();
  }

  async editar(index: number){
    const EDITAR = await this.alertaControle.create({
      header: 'Qual a nova tarefa?',
      inputs: [
        {
          name: 'tarefa',
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
          handler: (form) => {

          let msg  = this.mensagens[index];
          msg.mensagem = form.tarefa;

          }
        }
      ]
    });

    EDITAR.present();
  }

  ler() {

  }
}
