import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule, MatLabel} from '@angular/material/input';
import { Funcionario } from '../../models/Funcionarios';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, RouterLink, MatCardModule, MatOptionModule, MatSelectModule, MatLabel, MatIconModule],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario!: Funcionario;
  formBuilder = inject(FormBuilder);
  funcionarioForm!: FormGroup;
 
  constructor() {
    
  }
  ngOnInit(): void {
    
    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : '', Validators.required),
      sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome : '', Validators.required),
      email: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.email : '', [Validators.required, Validators.email]),
      idade: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.idade : '', [Validators.required,Validators.min(16), Validators.max(90)]),
      telefone: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.telefone : '', []),
      departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento : '',[Validators.required]),
      turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno : '', [Validators.required]),
      ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo : true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date()),
      
    });
  }
  submit() {
    console.log(this.funcionarioForm);

    this.onSubmit.emit(this.funcionarioForm.value);
  }
}
