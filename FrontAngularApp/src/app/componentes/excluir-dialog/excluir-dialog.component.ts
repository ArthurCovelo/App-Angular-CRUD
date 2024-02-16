import { Component, Inject } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContainer, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-excluir-dialog',
  standalone: true,
  imports: [MatDialogContainer,CommonModule,MatButtonModule,MatDialogTitle,MatDialogActions,MatDialogContent, MatDialogClose],
  templateUrl: './excluir-dialog.component.html',
  styleUrl: './excluir-dialog.component.css'
})
export class ExcluirDialogComponent {
  inputdata:any
  funcionario!: Funcionario;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private funcionarioService: FuncionarioService, private router: Router, private ref:MatDialogRef<ExcluirDialogComponent>){}

  ngOnInit(): void {
      this.inputdata = this.data;

      this.funcionarioService.GetFuncionario(this.inputdata.id).subscribe(data => {
          this.funcionario = data.dados;
      });
  }

  excluir(){
    this.funcionarioService.ExcluirFuncionario(this.inputdata.id).subscribe(data => {
       this.ref.close();
       window.location.reload();
    });
  }
  onNoClick(): void {
    this.ref.close();
  }

}