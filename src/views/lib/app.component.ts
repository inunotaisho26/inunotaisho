import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    public context: any;
    ngOnInit() {
        throw new Error("Method not implemented.");
    }
}