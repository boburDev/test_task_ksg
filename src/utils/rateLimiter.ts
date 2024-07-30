let requestCount = 0;
const limit = 8;
const interval = 5 * 60 * 1000;

setInterval(() => {
    requestCount = 0;
}, interval);

export const rateLimiter = {
    canProceed: () => {
        if (requestCount < limit) {
            requestCount++;
            return true;
        }
        return false;
    }
};
