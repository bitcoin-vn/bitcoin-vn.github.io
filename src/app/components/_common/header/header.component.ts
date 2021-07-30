import { Component, OnInit } from '@angular/core';
import { Menu } from "src/app/menu";
import { MusicService } from 'src/app/shared/services/music.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: any[] = Menu;
  isShowHide = true;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  overMusic(): void {
    this.musicService.playAudioJS('/assets/media/60510^phonebeeping.mp3', 0.3);
  }

}
