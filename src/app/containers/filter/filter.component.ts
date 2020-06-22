import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector:'filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

    @Input() schema : any;

  constructor() { }

  ngOnInit(): void {
  }

}
