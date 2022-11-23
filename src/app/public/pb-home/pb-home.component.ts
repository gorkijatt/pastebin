import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import cryptoRandomString from 'crypto-random-string';
import { Router} from '@angular/router';

@Component({
  selector: 'app-pb-home',
  templateUrl: './pb-home.component.html',
  styleUrls: ['./pb-home.component.css']
})
export class PbHomeComponent implements OnInit {
  
  declare paste_title: string;
  declare paste_password: string;
  declare paste_category: string;
  declare paste_syntax: string;
  declare msg:string;
  declare paste:string;
  declare random_string:string;

  constructor(private myhttp:HttpClient,private myrouter:Router) { }

  ngOnInit(): void {
    
  }

  insert_paste(create_paste: any){
    this.random_string = cryptoRandomString({length: 5});
     //json data preparing
     var json_data = {
      user_id: 'dsa',
      private: 0,
      title: this.paste_title,
      password: this.paste_password,
      category: this.paste_category,
      syntax: this.paste_syntax,
      paste:this.paste,
      url:this.random_string
    };

    this.myhttp
        .post('http://localhost:3000/pastes_add', json_data, {
          responseType: 'json',
        })
        .subscribe({
          next: (resp: any) => {
            //success
            if (resp.status == 1) {
              this.myrouter.navigate(['/paste/'+this.random_string]);
            } 
            //error
            else if (resp.status == 3) {
              this.msg = resp.msg;
            }
          },
          error: (error) => {
            this.msg = error.message;
          },
        });
  }
  

}
