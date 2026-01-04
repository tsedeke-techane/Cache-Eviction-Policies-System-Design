const LRUCache = require('../policies/LRUCache');

class LRUCacheFactory {
    createCache(capacity) {
        return new LRUCache(capacity);
    }
}

module.exports = LRUCacheFactory;
