import { Component,OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private fb:FormBuilder,private router:Router){}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      userName:[],
      password:[]
    })
  }
  onLogin()
  {
       if(this.loginForm.controls['userName'].value=='re'
       &&this.loginForm.controls['password'].value=='re@123')
       {                          //KEY       VALUE
           sessionStorage.setItem('userType','re');

          this.router.navigateByUrl('/dash/re')
       }
       else if(this.loginForm.controls['userName'].value=='oe'
       &&this.loginForm.controls['password'].value=='oe@123')
       {
        sessionStorage.setItem('userType','oe')
        this.router.navigateByUrl('/dash/oe');
       }
       else{
        alert("Enter valid username or password..!")
       }
  }
}
