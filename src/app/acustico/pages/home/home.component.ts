import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from "../player/player.component";
import { WhatsappComponent } from "../whatsapp/whatsapp.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, PlayerComponent, WhatsappComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
