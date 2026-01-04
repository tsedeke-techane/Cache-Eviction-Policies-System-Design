class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// complexity is (O(1)) keeping track of the access order for eviction when cache exceeds its size
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = null;
        this.tail = null;
    }

    addNode(node) {
        if (this.tail != null) {
            this.tail.next = node;
            node.prev = this.tail;
            node.next = null;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }
    }

    removeNode(node) {
        if (node.prev != null) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }
        if (node.next != null) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
    }

    moveToTail(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    get(key) {
        if (!this.map.has(key)) {
            return null;
        }
        const node = this.map.get(key);
        this.moveToTail(node);
        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this.moveToTail(node);
        } else {
            const newNode = new Node(key, value);
            if (this.map.size >= this.capacity) {
                this.map.delete(this.head.key);
                this.removeNode(this.head);
            }
            this.addNode(newNode);
            this.map.set(key, newNode);
        }
    }
}

module.exports = LRUCache;
