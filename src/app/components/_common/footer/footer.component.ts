import { Component, OnInit, AfterViewInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

}
