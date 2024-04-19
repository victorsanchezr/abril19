import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-hijo.component.html',
  styleUrl: './chat-hijo.component.css'
})
export class ChatHijoComponent {
  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();

  comentario:string = "";

  enviarPadre(){
    this.llamadaPadre.emit(this.comentario);

  }

}
