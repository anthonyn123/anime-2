import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shounen',
  templateUrl: './shounen.component.html',
  styleUrls: ['./shounen.component.css']
})
export class ShounenComponent implements OnInit {
  shounen =[
    {
      id: '1',
      nome: 'Naruto',
      raca: 'Jinchuriki',
      estado: 'Aldeia da folha - País do fogo'
    },
    {
      id: '2',
      nome: 'Goku',
      raca: 'Sayajin',
      lugar: 'Brasil'
    },
    {
      id: '3',
      nome: 'Asta',
      raca: 'Humano',
      lugar: 'Reino Clover'
    },
    {
      id: '4',
      nome: 'Luffy',
      raca: 'Pirata que estica - acumanomi',
      lugar: 'East blue'
    },
    {
      id: '5',
      nome: 'Midoryia',
      raca: 'Super herói',
      lugar: 'Tokyo'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
