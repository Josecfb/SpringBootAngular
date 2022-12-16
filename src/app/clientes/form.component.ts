import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = "Formulario de Cliente";
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id'];
      if (id){
        this.clienteService.getCliente(id).subscribe(cliente => this.cliente = cliente)
      }
    })
  }

  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito`, 'success')
      }
    )
  }


}
