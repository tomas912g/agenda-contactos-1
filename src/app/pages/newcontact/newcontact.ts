import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newcontact',
  imports: [FormsModule],
  templateUrl: './newcontact.html',
  styleUrl: './newcontact.scss'
})
export class Newcontact {
  async createContact (contactData: any){
    
  }

}
