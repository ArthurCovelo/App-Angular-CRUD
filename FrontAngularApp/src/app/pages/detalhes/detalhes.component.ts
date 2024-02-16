import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [MatInputModule, MatFormField, MatLabel, MatCardModule, CommonModule, RouterLink, MatButtonModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  funcionario?: Funcionario;
  id!: number;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router, private location: Location) {

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.funcionarioService.GetFuncionario(this.id).subscribe((data) => {
      const dados = data.dados;
      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString("pt-BR");
      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString("pt-BR");

      this.funcionario = dados;
      console.log(dados);
    });
  }


  InativaFuncionario() {

    this.funcionarioService.InativaFuncionario(this.id).subscribe((data) => {
      this.location.back();
    }, (erro) => {
      alert('Erro ao inativar o funcionário');
    })
  }
}

