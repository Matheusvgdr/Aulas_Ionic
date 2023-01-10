import { Component, Input } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { format } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertaControle: AlertController, private toast: ToastController) {

    this.lerLocalStorage();


  }


  mensagens = new Array();
  searchBar: string = "";

  //  teste = [
  //   {nome: 'teste'},
  //   {nome: 'teste02'}
  // ]

  /*transformar(){
    let json = '';
    json = '[';

    for(let i = 0; i < this.teste.length; i++){
      
      json = json + '{';
      json = json + '"nome"';
      json = json + ":";
      json = json + this.teste[i].nome;
      json = json + '},';

    }
    json = json + ']';
    console.log(json);
  }*/

  async adicionarTarefa() {
    const ALERTA = await this.alertaControle.create({
      header: 'Qual tarefa quer incluir?',
      inputs: [
        { name: 'tarefa', type: 'text', placeholder: 'Digite a tarefa' }
      ],
      buttons: [
        { text: 'Cancelar', handler: () => { console.log('cancelou'); } },
        {
          text: 'Adicionar', handler: (form) => {
            this.adicionar(form.tarefa);
          }
        }
      ]
    });

    ALERTA.present();
  }

  //* ----------- FUNÇÔES ----------------
  async adicionar(tarefaNova: string) {

    if (tarefaNova.trim().length < 1) {

      const TOAST = await this.toast.create({
        message: 'Você não digitou uma tarefa',
        duration: 2000,
        position: 'top',
        color: 'dark'
      });

      TOAST.present();

    } else {
      this.mensagens.push({ mensagem: tarefaNova, done: false });
      this.atualizarLocalStorage();
    }
  }

  async apagar(msg: any) {
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

            for (let i = 0; i < this.mensagens.length; i++) {

              if (msg.mensagem == this.mensagens[i].mensagem) {

                this.mensagens.splice(i, 1);
              }
            }

            this.atualizarLocalStorage();
          }
        }
      ]
    });

    ALERTA.present();
  }


  completar(msg: any) {

    msg.done = !msg.done;

    this.atualizarLocalStorage();
  }

  async editar(msg: any) {
    const EDITAR = await this.alertaControle.create({
      header: 'Qual a nova tarefa?',
      inputs: [
        { name: 'tarefa', type: 'text', placeholder: 'Digite a tarefa' }
      ],
      buttons: [
        { text: 'Cancelar', handler: () => { console.log('cancelou'); } },
        {
          text: 'Adicionar', handler: (form) => {

            this.testarEdicao(form.tarefa, msg);

          }
        }
      ]
    });

    EDITAR.present();
  }

  async testarEdicao(tarefaNova: string, msg: any) {

    if (tarefaNova.trim().length < 1) {

      const TOAST = await this.toast.create({
        message: 'Você não digitou uma tarefa',
        duration: 2000,
        position: 'top',
        color: 'dark'
      });

      TOAST.present();

    } else {
      msg.mensagem = tarefaNova;
      this.atualizarLocalStorage();
    }
  }

  atualizarLocalStorage() {
    localStorage.setItem("mensagemDB", JSON.stringify(this.mensagens));
  }

  lerLocalStorage() {
    this.mensagens = JSON.parse(
      localStorage.getItem('mensagemDB') || "[]");
  }

  filtrar(e: any) {
    this.searchBar = e.target.value.toLowerCase();
    this.mensagens = this.filtrarMsg(this.searchBar);
    console.log("Acionando o filtro");
  }

  filtrarMsg(search: string) {
    return this.mensagens.filter((i) => {
        return i.mensagem.toLowerCase().includes(search.toLowerCase());    
      
    })
  }

  limpar(){
   this.lerLocalStorage();
  }

  verificar(){
    
   this.limpar();
  }
}
