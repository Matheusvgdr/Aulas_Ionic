import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public msg = [
    {titulo: "mensagens recebidas", valor: 10},
    {titulo: "mensagens enviadas", valor: 5},
    {titulo: "mensagens apagadas", valor: 3}

  ]
}
