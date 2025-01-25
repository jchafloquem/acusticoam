import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from "../shared/footer/footer.component";
import { WhatsappComponent } from "./pages/whatsapp/whatsapp.component";

@Component({
  selector: 'app-acustico',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, WhatsappComponent],
  templateUrl: './acustico.component.html',
  styleUrl: './acustico.component.css'
})
export default class AcusticoComponent {

}
