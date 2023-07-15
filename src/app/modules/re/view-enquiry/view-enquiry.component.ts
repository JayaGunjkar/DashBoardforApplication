import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit{
allEnquiry:any;
  constructor(private cs:CommonService){}
  ngOnInit(): void {
    this.cs.getAllEnqury().subscribe(
      (e:any)=>{
        this.allEnquiry=e;
      }
    )
  }


  
   
  
}
