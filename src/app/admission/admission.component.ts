import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent  {

 public onClick(data)
 {
   
  console.log(data);
 }
}
