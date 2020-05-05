import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethodess = [{id:1 , name: 'email'} , {id:2 , name: 'phone'} , {id:3 , name: 'sms'}];

  constructor() { }

  log(x :any) {

    console.log(x);
  }

  ngOnInit(): void {
  }

  submit(f){
    console.log(f.value);
  }


  
 
}
