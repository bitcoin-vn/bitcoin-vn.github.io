import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Menu } from "src/app/menu";
import { MusicService } from 'src/app/shared/services/music.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  modalRef: BsModalRef;
  qrdata: string;
  btcAddress: string;
  menu: any[] = Menu;

  constructor(private modalService: BsModalService, private musicService: MusicService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.qrdata = window.location.href;
    this.btcAddress = '1Q9A5jDbZ8M6xUM5bCDhzqrn1NAd5mzKs8';
  }

  overMusic(): void {
    this.musicService.playAudioJS('/assets/media/60510^phonebeeping.mp3', 0.3);
  }

}
