import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  selectedOption: string | null = null; 
  prescriptionRows: string[][] = []; 
  profile: any = {};
  constructor() {
    
    this.prescriptionRows = [
      ['Medicine A', 'Dosage A', 'Frequency A', 'Instructions A'],
      ['Medicine B', 'Dosage B', 'Frequency B', 'Instructions B'],
      ['Medicine C', 'Dosage C', 'Frequency C', 'Instructions C']
    ];
  }
}
