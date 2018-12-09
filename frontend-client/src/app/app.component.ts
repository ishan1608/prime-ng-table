import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {PersonDataService} from "./person-data.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    persons: any[];
    cols: any[];

    constructor(private personDataService: PersonDataService) {}

    ngOnInit(): void {
        this.personDataService.getData().then(response => {
            this.persons = JSON.parse(response._body);
            console.log('Persons data loaded');
            console.log(this.persons);
        });

        this.cols = [
            {field: "isActive", header: "isActive"},
            {field: "balance", header: "balance"},
            {field: "picture", header: "picture"},
            {field: "age", header: "age"},
            {field: "eyeColor", header: "eyeColor"},
            {field: "gender", header: "gender"},
            {field: "company", header: "company"},
            {field: "email", header: "email"},
            {field: "phone", header: "phone"},
        ];
    }
}
