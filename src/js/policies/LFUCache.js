class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.frequency = 1;
    }
}

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.minFrequency = 0;
        this.keyNodeMap = new Map();
        this.freqListMap = new Map();
    }

    // update frequency
    updateFrequency(node) {
        const currentFreq = node.frequency;
        const nodes = this.freqListMap.get(currentFreq);
        nodes.delete(node);
        
        if (nodes.size === 0 && currentFreq === this.minFrequency) {
            this.minFrequency++;
        }
        
        node.frequency++;
        if (!this.freqListMap.has(node.frequency)) {
            this.freqListMap.set(node.frequency, new Set());
        }
        this.freqListMap.get(node.frequency).add(node);
    }

    get(key) {
        if (!this.keyNodeMap.has(key)) {
            return null;
        }
        const node = this.keyNodeMap.get(key);
        this.updateFrequency(node);
        return node.value;
    }

    put(key, value) {
        if (this.capacity <= 0) {
            return;
        }
        // if key already present, and we are trying to update the value and frequency
        if (this.keyNodeMap.has(key)) {
            const node = this.keyNodeMap.get(key);
            node.value = value;
            this.updateFrequency(node);
        } else {
            if (this.keyNodeMap.size >= this.capacity) {
                const minFreqNodes = this.freqListMap.get(this.minFrequency);
                // Get the first item (iterator().next())
                const lfuNode = minFreqNodes.values().next().value;
                minFreqNodes.delete(lfuNode);
                this.keyNodeMap.delete(lfuNode.key);
            }
            // Add new node to cache
            const newNode = new Node(key, value);
            this.keyNodeMap.set(key, newNode);
            this.minFrequency = 1; // resetting min frequency to 1 for the new node
            
            if (!this.freqListMap.has(1)) {
                this.freqListMap.set(1, new Set());
            }
            this.freqListMap.get(1).add(newNode);
        }
    }
}

module.exports = LFUCache;
