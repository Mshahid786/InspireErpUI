import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  title: string;
  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
  }

}
