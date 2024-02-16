import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { SearchService } from '../../services/search.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ExcluirDialogComponent } from '../../componentes/excluir-dialog/excluir-dialog.component';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatPaginator,
    MatSort],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})
export class FuncionariosComponent implements OnInit, AfterViewInit  {
 
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];
  columnsToDisplay = ['Situacao', 'Nome', 'Sobrenome', 'Email', 'Idade', 'Telefone', 'Departamento', 'Ações'];

  dataSource: MatTableDataSource<Funcionario>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private funcionarioService: FuncionarioService,
    private activateRouter: ActivatedRoute,
    private searchService: SearchService,public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Set the minimum number of items per page to 5
    this.paginator.pageSizeOptions = [5, 10, 20];
    this.paginator.pageSize = 5;
  }

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((data) => {
      const dados = data.dados;

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
      });

      this.funcionarios = dados;
      this.funcionariosGeral = dados;

      // Update the dataSource with the fetched data
      this.dataSource.data = this.funcionarios;
    });

    this.searchService.search$.subscribe((term) => {
      this.filterFuncionarios(term);
    });
  }

  filterFuncionarios(term: string) {
    term = term.toLowerCase();
    term = term.trim(); // Remove whitespace

    this.funcionarios = this.funcionariosGeral.filter((funcionario) => {
      return funcionario.nome.toLowerCase().includes(term);
    });

    // Update the dataSource with the filtered data
    this.dataSource.data = this.funcionarios;
    this.dataSource.filter = term;
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
  
    this.searchService.setSearchTerm(value);
  
    this.funcionarios = this.funcionariosGeral.filter((funcionario) => {
      return (
        funcionario.nome.toLowerCase().includes(value) ||
        funcionario.departamento.toLowerCase().includes(value) ||
        funcionario.telefone.toLowerCase().includes(value) ||
        funcionario.sobrenome.toLowerCase().includes(value) ||
        funcionario.email.toLowerCase().includes(value) ||
        (value == 'ativo' && funcionario.ativo) ||
        (value == 'inativo' && !funcionario.ativo) ||
        (value !== '' && funcionario.idade)
      );
    });
  
    // Update the dataSource with the filtered data
    this.dataSource.data = this.funcionarios;
  }
  OpenDialog(id : number){
    this.dialog.open(ExcluirDialogComponent,{
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    })
  }
}