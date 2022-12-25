import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-costcenter',
  templateUrl: './costcenter.component.html',
  styleUrls: ['./costcenter.component.scss']
})
export class CostcenterComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  title:string;
  displayedColumns: string[] = ['code', 'description', 'action'];


  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
  }

}
