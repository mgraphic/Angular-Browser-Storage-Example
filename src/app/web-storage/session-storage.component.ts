import { Component } from '@angular/core';
import { SessionStorage } from './web-stoarge.decorator';
import { WebStorageKeyType } from './web-storage.model';

@Component({
    selector: 'app-session-storage',
    template: `
        <h2>Session Storage Demo</h2>
        <h3>Stored Value for <code>sessionStorageValue</code>:</h3>
        <div>
            <input type="text" #defaultValue />
            <button
                (click)="setValue(keyTypesEnum.DEFAULT, defaultValue.value)"
            >
                save
            </button>
        </div>
        <div>
            Current Stored Value:
            <ng-container *ngIf="getValue(keyTypesEnum.DEFAULT)">{{
                getValue(keyTypesEnum.DEFAULT)
            }}</ng-container>
            <ng-container *ngIf="!getValue(keyTypesEnum.DEFAULT)"
                ><em>null</em></ng-container
            >
        </div>
        <div>
            <button (click)="clearValue(keyTypesEnum.DEFAULT)">clear</button>
        </div>
        <hr />
        <h3>Stored Value for <code>alt-key-name</code>:</h3>
        <div>
            <input type="text" #alternativeValue />
            <button
                (click)="
                    setValue(keyTypesEnum.ALTERNATIVE, alternativeValue.value)
                "
            >
                save
            </button>
        </div>
        <div>
            Current Stored Value:
            <ng-container *ngIf="getValue(keyTypesEnum.ALTERNATIVE)">{{
                getValue(keyTypesEnum.ALTERNATIVE)
            }}</ng-container>
            <ng-container *ngIf="!getValue(keyTypesEnum.ALTERNATIVE)"
                ><em>null</em></ng-container
            >
        </div>
        <div>
            <button (click)="clearValue(keyTypesEnum.ALTERNATIVE)">
                clear
            </button>
        </div>
    `,
    styles: [],
})
export class SessionStorageComponent {
    @SessionStorage() private sessionStorageValue!: string;
    @SessionStorage('alt-key-name')
    private alternativeSessionStorageValue!: string;

    keyTypesEnum: typeof WebStorageKeyType = WebStorageKeyType;

    setValue(type: WebStorageKeyType, value: string): void {
        switch (type) {
            case WebStorageKeyType.ALTERNATIVE:
                this.alternativeSessionStorageValue = value;
                break;

            case WebStorageKeyType.DEFAULT:
                this.sessionStorageValue = value;
                break;
        }
    }

    getValue(type: WebStorageKeyType): string {
        switch (type) {
            case WebStorageKeyType.ALTERNATIVE:
                return this.alternativeSessionStorageValue;

            case WebStorageKeyType.DEFAULT:
                return this.sessionStorageValue;
        }
    }

    clearValue(type: WebStorageKeyType): void {
        switch (type) {
            case WebStorageKeyType.ALTERNATIVE:
                localStorage.removeItem('alt-key-name');
                break;

            case WebStorageKeyType.DEFAULT:
                localStorage.removeItem('sessionStorageValue');
                break;
        }
    }
}
