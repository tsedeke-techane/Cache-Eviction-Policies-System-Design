const LFUCache = require('../policies/LFUCache');

class LFUCacheFactory {
    createCache(capacity) {
        return new LFUCache(capacity);
    }
}

module.exports = LFUCacheFactory;
