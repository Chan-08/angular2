import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true, 
  imports: [ChildComponent, RouterModule], 
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  receivedMessage = '';

  handleChildMessage(event: string) {
    this.receivedMessage = event;
  }
}
