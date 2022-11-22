import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb-home',
  templateUrl: './pb-home.component.html',
  styleUrls: ['./pb-home.component.css']
})
export class PbHomeComponent implements OnInit {

  code = `<?php
  $servername = "localhost";
  $username = "username";
  $password = "password";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password);
  
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";
  ?>
`

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
