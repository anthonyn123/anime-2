import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shounen',
  templateUrl: './seinen.component.html',
  styleUrls: ['./seinen.component.css']
})
export class SeinenComponent implements OnInit {
  seinen =[
    {
      id: '1',
      nome: 'Gatts',
      raca: 'humano / demônio / morto',
      estado: 'País Central'
    },
    {
      id: '2',
      nome: 'Alucard',
      raca: 'Vampiro',
      lugar: 'Castlevania'
    },
    {
      id: '3',
      nome: 'Satoru Fujinuma',
      raca: 'Humano / viajante',
      lugar: 'Chiba'
    },
    {
      id: '4',
      nome: ' Major Motoko Kusanagi ',
      raca: 'Cyborg',
      lugar: 'Shell'
    },
    {
      id: '5',
      nome: 'Kei Nagai',
      raca: 'Amaldiçoado',
      lugar: 'Polygon'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

