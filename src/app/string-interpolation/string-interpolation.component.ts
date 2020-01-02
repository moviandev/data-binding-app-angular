import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {
  firstName = 'Matheus';
  person = {
    firstName: 'Maria',
    lastName: 'A'
  };

  constructor() {}

  ngOnInit() {}
}
