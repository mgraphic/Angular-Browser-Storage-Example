import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { WeatherData } from './cache-storage.model';

@Component({
    selector: 'app-cache-storage',
    template: `
        <div class="container border rounded shadow mt-4 p-4">
            <h1>Cache Storage API</h1>
            <div class="container mt-5">
                <button class="btn btn-primary m-1" (click)="addCache()">
                    Add Cache
                </button>
                <button class="btn btn-primary m-1" (click)="loadCache()">
                    Load Cache
                </button>
                <button class="btn btn-primary m-1" (click)="clearCache()">
                    Clear Cache
                </button>
            </div>

            <section class="row mt-3 p-4 fs-3 border rounded">
                <div *ngIf="weatherData">
                    <h2>Weather in NYC</h2>
                    <div>
                        <em class="fw-semibold">Currently:</em>
                        {{ weatherData.description }}
                    </div>
                    <div>
                        <em class="fw-semibold">Wind:</em>
                        {{ weatherData.wind }}
                    </div>
                    <div>
                        <em class="fw-semibold">Temperature:</em>
                        {{ weatherData.temperature }}
                    </div>
                    <div>
                        <em class="fw-semibold">Forcast:</em>
                        <div *ngFor="let forcast of weatherData.forecast">
                            Day: {{ forcast.day }} | Wind: {{ forcast.wind }} |
                            Temp: {{ forcast.temperature }}
                        </div>
                    </div>
                </div>
                <div *ngIf="!weatherData"><em>No Data Cached</em></div>
            </section>
        </div>
    `,
    styles: [],
})
export class CacheStorageComponent implements OnInit, OnDestroy {
    private static API_REQUEST_URL: string =
        'https://goweather.herokuapp.com/weather/NYC';

    private cacheName: string = 'cache-demo';
    private cachObserver: Subject<WeatherData | undefined> = new Subject();
    private cacheSubscriber!: Subscription;

    public weatherData!: WeatherData;

    ngOnInit() {
        this.cacheSubscriber = this.cachObserver.subscribe((data) => {
            this.weatherData = data!;
        });
    }

    ngOnDestroy(): void {
        this.cacheSubscriber.unsubscribe();
    }

    async addCache() {
        const cache = await caches.open(this.cacheName);
        await cache.add(CacheStorageComponent.API_REQUEST_URL);
    }

    async loadCache() {
        const cache = await caches.open(this.cacheName);
        const res = await cache.match(CacheStorageComponent.API_REQUEST_URL);

        if (res) {
            const data = await res.json();
            this.cachObserver.next(data);
            return;
        }

        this.cachObserver.next(undefined);
    }

    async clearCache() {
        caches.delete(this.cacheName);
    }

    async isCached(): Promise<boolean> {
        return caches.has(this.cacheName);
    }
}
