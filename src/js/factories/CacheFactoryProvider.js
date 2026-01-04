const LRUCacheFactory = require('./LRUCacheFactory');
const LFUCacheFactory = require('./LFUCacheFactory');
const FIFOCacheFactory = require('./FIFOCacheFactory');

class CacheFactoryProvider {
    getCacheFactory(policy) {
        switch (policy.toLowerCase()) {
            case "lru":
                return new LRUCacheFactory();
            case "lfu":
                return new LFUCacheFactory();
            case "fifo":
                return new FIFOCacheFactory();
            default:
                throw new Error("Unknown cache policy: " + policy);
        }
    }
}

module.exports = CacheFactoryProvider;
