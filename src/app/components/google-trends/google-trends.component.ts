// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-google-trends',
  templateUrl: './google-trends.component.html',
  styleUrls: ['./google-trends.component.scss']
})
export class GoogleTrendsComponent implements OnInit {

  // 2. pass then in constructor
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
