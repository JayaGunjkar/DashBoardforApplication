import { Component,OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Service/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private fb:FormBuilder,private router:Router,private cs:CommonService){}
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
  }
  onLogin(){
 
       if(this.loginForm.controls['username'].value=='re'
       &&this.loginForm.controls['password'].value=='re@123')
       {                          //KEY       VALUE
           sessionStorage.setItem('userType','re');

          this.router.navigateByUrl('/dash/re')
       }
       else if(this.loginForm.controls['username'].value=='oe'
       &&this.loginForm.controls['password'].value=='oe@123')
       {
        sessionStorage.setItem('userType','oe')
        this.router.navigateByUrl('/dash/oe');
       }
       else{
        alert("Enter valid username or password..!")
       }

  // this.cs.loginCheck(
  //   this.loginForm.controls['username'].value,
  //   this.loginForm.controls['password'].value
  // ).subscribe(
  //   (response:any)=>{
  //     if(response!=null)
  //     {
  //       sessionStorage.setItem('userType','username');
  //       console.log(response)
  //       this.router.navigateByUrl("/dash/re")
  //     }
  //     else{
  //       console.log(response)
  //       alert("Enter Valid Credentials..!")
  //     }
  //   }
  // );


  }
}
