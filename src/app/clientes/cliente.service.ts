import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get(this.url).pipe(map(
      response => response as Cliente[])
    );
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente, {headers: this.httpHeaders})
  }

  getCliente(id:number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/&{id}`);
  }

}
