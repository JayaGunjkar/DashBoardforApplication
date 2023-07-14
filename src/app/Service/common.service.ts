import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enquiry } from '../Model/enquiry';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  custId:[];
  custFirstName:[];
  custLastName:[];
  custContactNo:[];
  custEmailId:[];
  custPANno:[];
  custLoanType:[];
  custLoanAmmount:[];
  custTennureYear:[];
  constructor(private http:HttpClient) { }
  createEnquiry(enqur:any){
    return this.http.post("http://localhost:1234/saveEnquiry",enqur)
  }

  emiId:[];
  principal:[];
  annualInterestRate:[];
  tenureInMonths:[]

  createEmi(e:any){
    return this.http.post("http://localhost:1234/CalculateEmi",e);
  }
}
