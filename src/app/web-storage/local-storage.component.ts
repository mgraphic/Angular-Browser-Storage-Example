import { Component } from '@angular/core';
import { LocalStorage } from './web-stoarge.decorator';
import { WebStorageKeyType } from './web-storage.model';

@Component({
    selector: 'app-local-storage',
    template: `
        <section class="row mt-3 pb-4">
            <h2>Local Storage Demo</h2>
            <h3 class="mt-3">
                Stored Value for <code>localStorageValue</code>:
            </h3>
            <div class="fs-3 fw-bold">
                Current Stored Value:
                <ng-container *ngIf="getValue(keyTypesEnum.DEFAULT)">{{
                    getValue(keyTypesEnum.DEFAULT)
                }}</ng-container>
                <ng-container *ngIf="!getValue(keyTypesEnum.DEFAULT)"
                    ><em>null</em></ng-container
                >
            </div>
            <div class="col mt-3">
                <input type="text" class="col-3" #defaultValue />
                <button
                    (click)="setValue(keyTypesEnum.DEFAULT, defaultValue.value)"
                    class="btn btn-sm btn-primary col-1"
                >
                    save
                </button>
            </div>
            <div class="mt-2">
                <button
                    (click)="clearValue(keyTypesEnum.DEFAULT)"
                    class="btn btn-secondary"
                >
                    clear
                </button>
            </div>
        </section>

        <hr />

        <section class="row mt-3 pt-4">
            <h3>Stored Value for <code>alt-key-name</code>:</h3>
            <div class="fs-3 fw-bold">
                Current Stored Value:
                <ng-container *ngIf="getValue(keyTypesEnum.ALTERNATIVE)">{{
                    getValue(keyTypesEnum.ALTERNATIVE)
                }}</ng-container>
                <ng-container *ngIf="!getValue(keyTypesEnum.ALTERNATIVE)"
                    ><em>null</em></ng-container
                >
            </div>
            <div class="col mt-3">
                <input type="text" class="col-3" #alternativeValue />
                <button
                    (click)="
                        setValue(
                            keyTypesEnum.ALTERNATIVE,
                            alternativeValue.value
                        )
                    "
                    class="btn btn-sm btn-primary col-1"
                >
                    save
                </button>
            </div>
            <div class="mt-2">
                <button
                    (click)="clearValue(keyTypesEnum.ALTERNATIVE)"
                    class="btn btn-secondary"
                >
                    clear
                </button>
            </div>
        </section>
    `,
    styles: [],
})
export class LocalStorageComponent {
    @LocalStorage() private localStorageValue!: string;
    @LocalStorage('alt-key-name') private alternativeLocalStorageValue!: string;

    keyTypesEnum: typeof WebStorageKeyType = WebStorageKeyType;

    setValue(type: WebStorageKeyType, value: string): void {
        switch (type) {
            case WebStorageKeyType.ALTERNATIVE:
                this.alternativeLocalStorageValue = value;
                break;

            case WebStorageKeyType.DEFAULT:
                this.localStorageValue = value;
                break;
        }
    }

    getValue(type: WebStorageKeyType): string {
        switch (type) {
            case WebStorageKeyType.ALTERNATIVE:
                return this.alternativeLocalStorageValue;

            case WebStorageKeyType.DEFAULT:
                return this.localStorageValue;
        }
    }

    clearValue(type: WebStorageKeyType): void {
        switch (type) {
            case WebStorageKeyType.ALTERNATIVE:
                localStorage.removeItem('alt-key-name');
                break;

            case WebStorageKeyType.DEFAULT:
                localStorage.removeItem('localStorageValue');
                break;
        }
    }
}
