import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/class/players';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/service/players.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  playerFormAdd : Players = new Players();
  totalPlayers !:  Players[]

  constructor(private playersService : PlayersService,
              private router : Router) { }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe(data => {
      this.totalPlayers = data;
    }) 
  }

  submitEdit(){
    this.playersService.addPlayer(this.playerFormAdd).subscribe( data => {
      this.router.navigate(['/home'])
  })
  }

}
