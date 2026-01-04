const FIFOCache = require('../policies/FIFOCache');

class FIFOCacheFactory {
    createCache(capacity) {
        return new FIFOCache(capacity);
    }
}

module.exports = FIFOCacheFactory;
