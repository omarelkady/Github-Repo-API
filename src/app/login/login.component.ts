import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('tw') typewriterElement;


  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    var target = this.typewriterElement.nativeElement;
    var writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    });

    writer.type('Please enter your github').rest(500).type(' Username').changeTypeColor('green').rest(2000).start()
  }

  loginBtn(username: string){
    if(username == ''){
      this.toastr.warning("Please input username")
    } else {
      localStorage.setItem('username', username);
      this.router.navigate(['/home']);
    }
    
  }

  
}
