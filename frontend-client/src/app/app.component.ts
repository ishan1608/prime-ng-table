import {Component, OnInit} from '@angular/core';
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
}
