import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { FuncionarioFormComponent } from "../../componentes/funcionario-form/funcionario-form.component";
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
    selector: 'app-cadastro',
    standalone: true,
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css',
    imports: [FuncionarioFormComponent, RouterLink]
})
export class CadastroComponent {
    btnAcao = "Cadastrar!";
    btnTitulo = "Criação ao Funcionário!"
    constructor(private funcionarioService: FuncionarioService, private router: Router) {

    }

    createFuncionario(funcionario: Funcionario) {
        this.funcionarioService.createFuncionario(funcionario).subscribe(() => {
            console.log("Sucesso!!!");
            this.router.navigate(['/funcionarios'])
        });

}
}
