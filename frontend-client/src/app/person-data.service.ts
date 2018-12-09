import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PersonDataService {

    public data: {};

    constructor(private http: Http) {
    }

    getData(): any {
        return this.http.get('/api/data.json').toPromise();
    }

}
