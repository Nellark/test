import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/shared-UI/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
