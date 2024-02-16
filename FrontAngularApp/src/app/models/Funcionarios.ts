export interface Funcionario {
    id?: number;
    nome: string;
    sobrenome: string;
    email: string;
    idade: number;
    telefone: string;
    departamento: string;
    ativo: boolean;
    turno: string;
    dataDeCriacao?: string;
    dataDeAlteracao?: string;
}