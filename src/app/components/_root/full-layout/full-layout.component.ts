// 1. import dependencies
import { Inject, Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit, OnDestroy {

  // 2. pass then in constructor
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document
  ) {
    router.events.subscribe((val: any) => {
      if ('/' === val.url) {
        document.getElementById("main").classList.add('bg-gray-home');
      } else {
        document.getElementById("main").classList.remove('bg-gray-home');
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
