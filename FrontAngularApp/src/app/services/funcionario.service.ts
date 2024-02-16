import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionarios';
import { Response } from '../models/Response';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  public apiUrl = `${environment.ApiUrl}/Funcionario`


  constructor(public http: HttpClient) { }
  
  GetFuncionarios() : Observable<Response<Funcionario[]>>{
    return this.http.get<Response<Funcionario[]>>(`${this.apiUrl}`);
  }
  GetFuncionario(id: Number): Observable<Response<Funcionario>>{
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }
  createFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }
  EditarFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>>{
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }
  InativaFuncionario(id: number) : Observable<Response<Funcionario[]>>{
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}/inativaFuncionario?id=${id}`, id);
  }
  ExcluirFuncionario(id: number) : Observable<Response<Funcionario[]>>{
    return this.http.delete<Response<Funcionario[]>>(`${this.apiUrl}?id=${id}`)
  }

}
