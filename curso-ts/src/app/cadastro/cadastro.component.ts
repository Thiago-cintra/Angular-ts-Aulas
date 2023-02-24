import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DiasDaSemana } from '../dias-da-semana';
import { Produto } from '../Objetos/Produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any
  texto: string = 'Teste'
  dia: DiasDaSemana = DiasDaSemana.qui

  produto: Produto = new Produto('Papel', 15)


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    
    this.produto.preco = 150
    this.produto.preco = this.produto.aplicaDesconto(this.produto.preco)
    this.route.params.subscribe(parametros =>{
        if(parametros['id']){
          this.id = parametros['id']
        }
    })

    this.texto = this.retornarNome('João')
  }

  retornarNome = (nome: string): string =>{

    return `${nome} da Silva`
  }
}
