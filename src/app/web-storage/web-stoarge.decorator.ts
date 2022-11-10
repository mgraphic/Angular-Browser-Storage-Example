export function LocalStorage(key?: string): Function {
    return WebStorage(localStorage, key);
}

export function SessionStorage(key?: string): Function {
    return WebStorage(sessionStorage, key);
}

function WebStorage(
    webStorage: Storage,
    alternativeKey: string | undefined
): Function {
    return (target: Object, propertyName: string): void => {
        const key: string = alternativeKey ?? propertyName;

        Object.defineProperty(target, propertyName, {
            get: function (): any {
                return JSON.parse(`${webStorage.getItem(key)}`);
            },

            set: function (value: any): void {
                webStorage.setItem(key, JSON.stringify(value));
            },
        });
    };
}
