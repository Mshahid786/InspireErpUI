import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,
) { }
  title: string;
  displayedColumns = ['CheckAll', 'Description', 'Qty', 'Unit', 'Status', 'RefNo', 'actionsColumn'];
  displayedColumns2 = ['budget', 'amount', 'actionsColumn'];

  @Input() jobbudgetList = [
    { budget: 'cars', amount: 200},
    { budget: 'cars2', amount: 200}, { budget: 'cars', amount: 200},
    { budget: 'cars2', amount: 200}];


  @Input() jobScopeList = [
    {
      isTrue: true,
      description: 'desc 1',
      qty: 5,
      unit: 12,
      status: 'Active',
      refno: 1234556
  },
  {
    isTrue: true,
    description: 'desc 1',
    qty: 5,
    unit: 12,
    status: 'Active',
    refno: 1234556

}
    ] ;



  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });

  }

}









