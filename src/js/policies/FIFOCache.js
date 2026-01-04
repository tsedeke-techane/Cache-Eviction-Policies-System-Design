class FIFOCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.queue = [];
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.map.set(key, value);
            return;
        }
        if (this.map.size >= this.capacity) {
            // remove oldest key
            const oldestKey = this.queue.shift();
            this.map.delete(oldestKey);
        }
        // add the key
        this.queue.push(key);
        this.map.set(key, value);
    }

    get(key) {
        // return if key exists; else null
        return this.map.has(key) ? this.map.get(key) : null;
    }
}

module.exports = FIFOCache;
