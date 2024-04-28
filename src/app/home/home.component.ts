import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 

})
export class HomeComponent {
  constructor(private router: Router) { }

  selectedTabIndex: number = 0; 

  getMessage(): string {
    switch (this.selectedTabIndex) {
      case 0:
        return "You're trying to access as a PATIENT";
      case 1:
        return "You're trying to access as a PHYSICIAN";
      case 2:
        return "You're trying to access as a PHARMACIST";
      default:
        return "";
    }
  }
  onSubmit(){
    this.router.navigateByUrl('/patient');
  }

}
