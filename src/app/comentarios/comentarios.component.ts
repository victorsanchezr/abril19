import { Component } from '@angular/core';
import { ChatHijoComponent } from '../chat-hijo/chat-hijo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [ChatHijoComponent,FormsModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

  comentarios:string [] = [];

  recibir(dato:string){
    this.comentarios.push(dato);
  }

}
