import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/class/players';
import { PlayersService } from 'src/app/service/players.service';
import { faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  players ?: Players[];
  faEye = faEye;

  constructor(private playersService : PlayersService) { this.playersService.getPlayers().subscribe(data => {
    this.players = data;
  });
}

  ngOnInit(): void {
  }

}
