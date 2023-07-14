import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit{

  constructor(private fb:FormBuilder,
    public comSer:CommonService,private router:Router){}

  emiReg:FormGroup;
emi:any;
  ngOnInit(): void {
    this.emiReg=this.fb.group({
      emiId:[],
      principal:[],
      annualInterestRate:[],
      tenureInMonths:[],
      emi:[]
    })
  }
  createEmiData(){
    
    this.comSer.createEmi(this.emiReg.value).subscribe((e:any)=>{
 this.emiReg.controls['emi'].patchValue(e.emi);
    } )
      }

 


}
