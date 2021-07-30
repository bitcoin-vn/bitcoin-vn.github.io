import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-bitcoin-halving',
  templateUrl: './bitcoin-halving.component.html',
  styleUrls: ['./bitcoin-halving.component.scss']
})
export class BitcoinHalvingComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params['name']);
    });
    console.log(this.route.snapshot.paramMap.get('name'));
  }

  ngOnInit() {
  }

}
