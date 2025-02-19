import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  standalone: true,
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 6];
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  fruits: string[] = ['apple', 'banana', 'orange', 'grape'];

  // Using map to double the numbers
  doubledNumbers = this.numbers.map(num => num * 2);

  // Using find to get a user by ID
  foundUser = this.users.find(user => user.id === 2);

  // Using filter to get only even numbers
  evenNumbers = this.numbers.filter(num => num % 2 === 0);

  // Using includes to check if 'banana' is in the fruits array
  hasBanana = this.fruits.includes('banana');

  // Using some to check if there's any even number
  hasEvenNumber = this.numbers.some(num => num % 2 === 0);
}
