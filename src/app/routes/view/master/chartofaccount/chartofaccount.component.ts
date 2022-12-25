import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chartofaccount',
  templateUrl: './chartofaccount.component.html',
  styleUrls: ['./chartofaccount.component.scss']
})
export class ChartofaccountComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  title:string;

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
  }

}
