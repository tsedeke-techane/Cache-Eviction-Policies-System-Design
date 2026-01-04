const CacheFactoryProvider = require('./factories/CacheFactoryProvider');

function testCache(cache) {
    console.log("Adding entries to the cache: (1, One), (2, Two), (3, Three)");
    cache.put(1, "One");
    cache.put(2, "Two");
    cache.put(3, "Three");

    console.log("Cache state after adding 3 entries:");
    console.log("Accessing key 1: " + cache.get(1)); // Accessing key 1 to modify order in LRU and LFU
    console.log("Accessing key 2: " + cache.get(2)); // Accessing key 2 to modify order in LRU and LFU

    console.log("Adding another entry (4, Four), should evict one item based on the policy.");
    cache.put(4, "Four"); // This should trigger an eviction based on the cache policy

    console.log("Cache state after eviction:");
    console.log("Accessing key 1 (expected: null if evicted): " + cache.get(1));
    console.log("Accessing key 2: " + cache.get(2));
    console.log("Accessing key 3: " + cache.get(3));
    console.log("Accessing key 4: " + cache.get(4));
}

function main() {
    const provider = new CacheFactoryProvider();

    console.log("=== Testing LRU Cache ===");
    const lruCache = provider.getCacheFactory("lru").createCache(3);
    testCache(lruCache);

    console.log("\n=== Testing FIFO Cache ===");
    const fifoCache = provider.getCacheFactory("fifo").createCache(3);
    testCache(fifoCache);

    console.log("\n=== Testing LFU Cache ===");
    const lfuCache = provider.getCacheFactory("lfu").createCache(3);
    testCache(lfuCache);
}

main();
