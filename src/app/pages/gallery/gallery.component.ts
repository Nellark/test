import { Component } from '@angular/core';
import { FooterComponent } from '../../UI/shared-UI/footer/footer.component';
import { NavComponent } from '../../UI/shared-UI/nav/nav.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
