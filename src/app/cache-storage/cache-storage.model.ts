export type ForecastData = {
    day: string;
    temperature: string;
    wind: string;
};

export type WeatherData = {
    description: string;
    forecast: ForecastData[];
    temperature: string;
    wind: string;
};
