import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-assetmanagment',
  templateUrl: './assetmanagment.component.html',
  styleUrls: ['./assetmanagment.component.scss']
})
export class AssetmanagmentComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  title:string;
  displayedColumns: string[] = ['path', 'group_name', 'code', 'asset_name', 'date', 'action'];


  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
  }

}
