import { Component, OnInit } from '@angular/core';
import { FuncionarioFormComponent } from "../../componentes/funcionario-form/funcionario-form.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-editar',
    standalone: true,
    templateUrl: './editar.component.html',
    styleUrl: './editar.component.css',
    imports: [FuncionarioFormComponent, RouterLink, CommonModule]
})
export class EditarComponent implements OnInit {
 

  btnAcao: string = 'Update'
  btnTitulo: string = 'Editar Funcionário'

  funcionario!: Funcionario;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) {
    
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(id).subscribe((data) =>
    {
      this.funcionario = data.dados;
      console.log(this.funcionario);
    })
  }

  editarFuncionario(funcionario: Funcionario) {
    this.funcionarioService.EditarFuncionario(funcionario).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/funcionarios'])
    })
  }
}
