import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {
  
  
  //Arrays
  numbers: number[] = [1, 2, 3, 4, 5, 6];
  
  users = [
    { id: 1, name: 'Chan' },
    { id: 2, name: 'Mj' },
    { id: 3, name: 'Jvd' }
  ];

  fruits: string[] = ['apple', 'banana', 'orange', 'grape'];

  // User inputs
  findInput: string = '';
  filterInput: number | null = null;
  includesInput: string = '';
  someInput: number | null = null;

  // Results
  mappedNumbers: number[] = [];
  foundUser: string = '';
  filteredNumbers: number[] = [];
  includesResult: string = '';
  someResult: string = '';


  applyMap() {
    this.mappedNumbers = this.numbers.map(num => num * 2);
  }


  applyFind() {
    const user = this.users.find(user => user.name.toLowerCase() === this.findInput.toLowerCase());
    this.foundUser = user ? `User Found: ${user.name}` : 'User Not Found';
  }

  
  applyFilter() {
    if (this.filterInput !== null) {
      this.filteredNumbers = this.numbers.filter(num => num % this.filterInput! === 0);
    }
  }

  applyIncludes() {
    this.includesResult = this.fruits.includes(this.includesInput.toLowerCase())
      ? `'${this.includesInput}' is in the list`
      : `'${this.includesInput}' is not in the list`;
  }

  applySome() {
    if (this.someInput !== null) {
      this.someResult = this.numbers.some(num => num % this.someInput! === 0)
        ? `At least one number is divisible by ${this.someInput}`
        : `No numbers are divisible by ${this.someInput}`;
    }
  }
  
  
}