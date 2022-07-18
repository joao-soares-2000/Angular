import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

animalDetalhe = '';

  animals: Animal[] = [
    {tipo: 'Cão', nome: 'Pingo', idade: 2},
    {tipo: 'Gato', nome: 'Nina', idade: 3},
    {tipo: 'Rato', nome: 'Jerry', idade: 4}
  ]
  constructor() { }

  ngOnInit(): void {
  }

showIdade(animal: Animal){
  this.animalDetalhe = `O animal com o nome ${animal.nome} tem ${animal.idade} anos de vida`;
}

}
