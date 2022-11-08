import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Cinta'
  user = {
    email: '',
    pass: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm){
    console.log('submit');
    console.log(this.user);
    console.log(formulario);
  }

}
