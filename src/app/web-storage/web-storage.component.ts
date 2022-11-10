import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-web-storage',
    template: `
        <div class="container border rounded shadow mt-4 p-4">
            <h1>Web Storage API</h1>
            <div class="mt-4">
                <a routerLink="local">Local Storage Demo</a> |
                <a routerLink="session">Session Storage Demo</a>
            </div>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [],
})
export class WebStorageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
