import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pricelevel',
  templateUrl: './pricelevel.component.html',
  styleUrls: ['./pricelevel.component.scss']
})
export class PricelevelComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  title: string;
  displayedColumns: string[] = ['id', 'name'];


  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
  }

}
