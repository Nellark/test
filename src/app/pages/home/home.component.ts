import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/shared-UI/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
