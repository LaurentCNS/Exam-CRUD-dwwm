import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players } from 'src/app/class/players';
import { PlayersService } from 'src/app/service/players.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  player !: Players;
  id : number;

  constructor( private playersService : PlayersService,
               private activatedRoute : ActivatedRoute)   { 
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.playersService.getPlayer(this.id).subscribe( data => {
      this.player = data; 
      })
  }

}
