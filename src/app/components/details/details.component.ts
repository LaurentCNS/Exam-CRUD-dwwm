import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/service/players.service';
import { Players } from 'src/app/class/players';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit 
{

  playerForm !: Players 
  id : number;

  constructor( private activatedRoute : ActivatedRoute,
               private playersSerivce : PlayersService,
               private router : Router) { 
  this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.playersSerivce.getPlayer(this.id).subscribe( data => {
      this.playerForm = data;
      console.log(this.playerForm);  
      })
  }


  submitEdit(){
    this.playersSerivce.editPlayer(this.playerForm).subscribe( data => {
      this.router.navigate(['/admin'])
  })
  }

  removeOne(id : number){
    this.playersSerivce.removePlayer(id).subscribe( data => {
      this.ngOnInit()
      this.router.navigate(['/admin'])
  })
  }
}
