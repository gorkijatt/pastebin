import { ChangeDetectorRef, Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {from, Observable, throwError} from 'rxjs';

import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

declare function hightlight_it():any;

@Component({
  selector: 'app-pb-paste',
  templateUrl: './pb-paste.component.html',
  styleUrls: ['./pb-paste.component.css'],
})
export class PbPasteComponent implements OnInit {
  declare url:string;
  declare data_paste:String;
  declare data_new:String;
  
  
  constructor(private cdr:ChangeDetectorRef,private myhttp:HttpClient,private route: ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;    
    this.router.onSameUrlNavigation = 'reload';
    this.url = this.route.snapshot.params['url']; 
    this.paste();    
  }


  paste(){
   
    this.myhttp.get("http://localhost:3000/pastes?url="+this.url,{responseType:"json"}).subscribe( 
      { 
        next:(resp:any)=> 
        { 
          if(resp.status===1){
            this.data_paste = resp.data[0].paste;
            setTimeout( ()=>{
              hightlight_it();
              }, 150)
          }else{
            alert("no data found");
          }
        }, 
        error:(err:any)=> 
        { 
          console.log(err);
        } 
      } 
    ) 
  }

}
