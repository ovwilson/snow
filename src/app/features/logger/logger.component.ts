import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'logger',
    templateUrl: './logger.component.html'
})
export class LoggerComponent implements OnInit {

    @Input() hide : boolean = false;
    @Input() content : any[] = [{
        title:'Title goes here',
        description:'Descriptions goes here',
        html:'<p>Html goes here</p>'
    }]

    constructor() { }

    ngOnInit(): void {
    }

}
