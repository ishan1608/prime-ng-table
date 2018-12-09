import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PersonDataService} from "./person-data.service";

import {DataTableModule, SharedModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        DataTableModule,
        SharedModule
    ],
    providers: [PersonDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
