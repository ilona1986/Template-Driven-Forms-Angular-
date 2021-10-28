import {Component, OnInit} from '@angular/core';
import {User} from "../shared/user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  roles: string[] = ['Гость', 'Модератор', 'Администратор']
  model: User = new User(1, null, null, null)

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Форма отправлена');
  }

  errorsLog(d: any): void {

  }
}
