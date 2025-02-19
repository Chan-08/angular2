import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule, RouterModule], 
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = '';  
  messageToChild = ''; 
  receivedMessage = ''; 

  sendDataToChild() {
    this.messageToChild = this.parentMessage; 
  }

  handleChildMessage(event: string) {
    this.receivedMessage = event;
  }
}
