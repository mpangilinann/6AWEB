import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
  standalone: true,
})
export class Directives {
  isActiveStatic: boolean = false;
  isActiveDynamic: boolean = false;

  showNote() {
    this.isActiveStatic = true;
  }

  hideNote() {
    this.isActiveStatic = false;
  }

  toggleParagraph() {
    this.isActiveDynamic = !this.isActiveDynamic;
  }

  monthValue: string = 'jan';
  monthNameDynamic: string = '';
  monthNameOutput: string = '';

  cityList: string[] = ['Angeles', 'San Fernando', 'Mabalacat', 'Tarlac', 'Bataan'];

  students = [
    { id: 1, name: 'John Santos', course: 'Information Technology', isActive: false },
    { id: 2, name: 'Anne Marcos', course: 'Animation', isActive: true },
    { id: 3, name: 'Mark Villanueva', course: 'Computer Engineering', isActive: false },
    { id: 4, name: 'Diane Cruz', course: 'Information Systems', isActive: false },
  ];
}
