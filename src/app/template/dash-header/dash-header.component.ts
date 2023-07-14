import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent implements OnInit{
  userRole!: string;
  ngOnInit(): void {
   let ut:any= sessionStorage.getItem('userType');

   if(ut=='re')
   {
    this.userRole='Relationship Excuative';
   }
  else if(ut=='oe')
   {
    this.userRole='Operational Excuative';
   }
  }

}
