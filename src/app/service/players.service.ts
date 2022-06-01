import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Players } from 'src/app/class/players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  
  apiurl = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }


  getPlayers(): Observable<Players[]>{
    return this.httpClient.get<Players[]>(this.apiurl + "/players")
  }

  getPlayer(id: number): Observable<Players>{
    return this.httpClient.get<Players>(this.apiurl + "/players/" + id)
  }

  removePlayer(id: number): Observable<Players>{
    return this.httpClient.delete<Players>(this.apiurl + "/players/" + id)
  }

  editPlayer(playerForm : Players): Observable<Players>{
    return this.httpClient.put<Players>(this.apiurl + "/players/" + playerForm.id, playerForm)
  }

  addPlayer(playerFormAdd : Players): Observable<Players>{
    return this.httpClient.post<Players>(this.apiurl + "/players", playerFormAdd)
  }


}
