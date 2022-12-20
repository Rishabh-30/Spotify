import { Component, OnInit} from '@angular/core';
import { Song } from '../model/song';
// import { Song } from '../model/song';
// import { SONGS } from '../model/songs';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  //  songs?:Song[] = SONGS;
  song:Array<Song>=[]
 

  constructor(private service:SongService) { }

  ngOnInit(): void {
    this.service.getAllSongs().subscribe(data => {this.song=data;})
    
  }
  // getAllSongs(){
  //   this.service.getAllSongs().subscribe(data => {
  //       this.song=data;
  //       // for(let track of song){
  //       //   this.song.push(track);
  //       // }
  //     }
  //   );
  // }

}
