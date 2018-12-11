import {Component, OnInit} from '@angular/core';
import {PersonDataService} from "./person-data.service";

import * as $ from 'jquery';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    persons: any[];
    cols: any[];

    extraPerson = {
        "isActive": false,
        "balance": "$2,139.56",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "green",
        "gender": "male",
        "company": "ONTALITY",
        "email": "caincharles@ontality.com",
        "phone": "+1 (822) 524-3606"
    };

    constructor(private personDataService: PersonDataService) {}

    ngOnInit(): void {
        this.personDataService.getData().then(response => {
            this.persons = response.json();
        });

        this.cols = [
            {field: "balance", header: "Balance"},
            {field: "age", header: "Age"},
            {field: "eyeColor", header: "Eye Color"},
            {field: "gender", header: "Gender"},
            {field: "company", header: "Company"},
            {field: "phone", header: "Phone"},
        ];
    }

    changeRow(event): void {
        let elem = $(event.target);
        switch (elem.text()) {
            case 'Add Row':
                this.persons.push(this.extraPerson);
                elem.text('Remove Row');
                break;
            case 'Remove Row':
                this.persons.pop();
                elem.text('Add Row');
                break;
            default:
                console.error('Default Case. This should never be executed');
                break;
        }
    }
}
