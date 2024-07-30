interface CacheEntry {
    data: any;
    expiry: number;
}

const cache: { [key: string]: CacheEntry } = {};

export const cacheUtil = {
    get: (key: string) => {
        const entry = cache[key];
        if (entry && entry.expiry > Date.now()) {
            return entry.data;
        }
        return null;
    },
    set: (key: string, data: any, ttl: number) => {
        cache[key] = { data, expiry: Date.now() + ttl };
    }
};
