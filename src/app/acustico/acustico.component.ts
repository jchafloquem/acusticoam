import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-acustico',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './acustico.component.html',
  styleUrl: './acustico.component.css'
})
export default class AcusticoComponent {

}
