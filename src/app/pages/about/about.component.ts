import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/shared-UI/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
