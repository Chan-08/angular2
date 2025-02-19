import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  imports: [FormsModule] 
})
export class ChildComponent {
  @Input() message!: string; 
  @Output() messageEvent = new EventEmitter<string>();

  childMessage = ''; 

  sendMessage() {
    this.messageEvent.emit(this.childMessage); 
  }
}
