import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Navegação', url: 'navegacao', icon: 'navigate-circle' },
    { title: 'Botões', url: 'buttons', icon: 'radio-button-on' },
    { title: 'Alertas', url: 'alerta', icon: 'chatbubble' },
    { title: 'Ação', url: 'acao', icon: 'caret-up-circle' },
    { title: 'Badge', url: 'badge', icon: 'ribbon' }
    
    
  ];
  public labels = ['Senac'];
  constructor() {}
}
