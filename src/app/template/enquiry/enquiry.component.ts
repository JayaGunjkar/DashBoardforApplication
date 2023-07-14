import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit{
  constructor(private fb:FormBuilder,
    public comSer:CommonService,private router:Router){}
  enqRegis:FormGroup;
  ngOnInit(): void {
    this.enqRegis=this.fb.group({
      custId:[],
      custFirstName:[],
      custLastName:[],
      custContactNo:[],
      custEmailId:[],
      custPANno:[],
      custLoanType:[],
      custLoanAmmount:[],
      custTennureYear:[]
    })
  }
  onRegisterEnquiry(){
    this.comSer.createEnquiry(this.enqRegis.value).subscribe(
      (response:any)=>{
        if(response!=null){
          alert("Enquiry data inserted SuccessFully!!!")
          this.router.navigateByUrl('/enquiry')
          this.enqRegis.reset();
        }
      }
    );
  }

}
