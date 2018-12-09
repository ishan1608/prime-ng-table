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
            {field: "balance", header: "balance"},
            {field: "age", header: "age"},
            {field: "eyeColor", header: "eyeColor"},
            {field: "gender", header: "gender"},
            {field: "company", header: "company"},
            {field: "phone", header: "phone"},
        ];
    }
}
