import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from "../player/player.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, PlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
