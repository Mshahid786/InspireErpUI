import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.component.html',
  styleUrls: ['./termsandcondition.component.scss']
})
export class TermsandconditionComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  title: string;
  displayedColumns: string[] = ['code', 'terms_condition', 'action'];

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
  });
  }

}
