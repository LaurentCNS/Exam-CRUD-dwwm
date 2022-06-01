import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/class/players';
import { PlayersService } from 'src/app/service/players.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  players ?: Players[];
  playersSort ?: Players[];
  guardPlayers ?: Players[];
  defPlayers ?: Players[];
  midPlayers ?: Players[];
  attaqPlayers ?: Players[];

  constructor(private playersService : PlayersService) { }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe(data => {
      this.players = data;
      if(this.players){
        this.guardPlayers = this.players.filter(player => player.poste === 'Gardien de but');
        this.defPlayers = this.players.filter(player => player.poste === 'Défenseur');
        this.midPlayers = this.players.filter(player => player.poste === 'Milieu');
        this.attaqPlayers = this.players.filter(player => player.poste === 'Attaquant');
        this.playersSort = (this.guardPlayers).concat(this.defPlayers).concat(this.midPlayers).concat(this.attaqPlayers); 
        console.log(this.playersSort);
        
      }
    });
    
  }

}
