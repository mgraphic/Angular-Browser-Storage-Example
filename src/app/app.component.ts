import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="container mt-5">
            <button
                class="btn btn-primary m-1"
                routerLink="web-storage-example"
            >
                Web Storage
            </button>
            <button
                class="btn btn-primary m-1"
                routerLink="cache-storage-example"
            >
                Cache Storage
            </button>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [],
})
export class AppComponent {}
