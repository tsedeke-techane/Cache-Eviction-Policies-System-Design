# CacheEvictor

This project implements various cache eviction policies, including **Least Recently Used (LRU)**, **Least Frequently Used (LFU)**, and **First-In-First-Out (FIFO)**. These algorithms are designed to manage cache memory efficiently, optimizing data retrieval and memory usage.

## Table of Contents

- [Introduction](#introduction)
- [Implemented Cache Policies](#implemented-cache-policies)
  - [LRU (Least Recently Used)](#lru-least-recently-used)
  - [LFU (Least Frequently Used)](#lfu-least-frequently-used)
  - [FIFO (First-In-First-Out)](#fifo-first-in-first-out)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)

## Introduction

Caches are critical components of software systems, allowing for quick data access and efficient memory management. This project explores different cache eviction strategies to manage the storage and retrieval of data in memory. It is implemented in JavaScript and provides a clear, scalable approach to cache management using LRU, LFU, and FIFO algorithms.

## Implemented Cache Policies

### LRU (Least Recently Used)
- **Description**: Removes the least recently used items first when the cache exceeds its size. Uses a combination of a doubly linked list and a Map for **O(1)** access and updates.
- **Use Case**: Suitable for applications where recently accessed data is more likely to be accessed again.

### LFU (Least Frequently Used)
- **Description**: Removes the least frequently used items first. Uses a Map and a frequency list to keep track of the number of times an item is accessed, ensuring **O(1)** time complexity for insertion, update, and eviction.
- **Use Case**: Ideal for scenarios where some data items are accessed more frequently than others and should be kept in the cache.

### FIFO (First-In-First-Out)
- **Description**: Evicts the oldest items first, regardless of how often they are accessed. Uses a simple queue to manage the order of insertion and eviction.
- **Use Case**: Useful for simple scenarios where the oldest data should be removed first.

## Features

- Implementation of LRU, LFU, and FIFO caching algorithms.
- Efficient cache management with **O(1)** time complexity for insertion, access, and eviction.
- Easy-to-use JavaScript classes for integration into various applications.

## Installation

1. Clone the repository:
    ```bash
    github.com/tsedeke-techane/Cache-Eviction-Policies-System-Design.git
    ```
2. Navigate to the project directory:
    ```bash
    cd CacheEvictor
    ```
3. Install dependencies (if any) and run:
    ```bash
    npm start
    ```

## Usage

1. Instantiate the cache with a specified capacity:
    ```javascript
    const LRUCache = require('./src/js/policies/LRUCache');
    const LFUCache = require('./src/js/policies/LFUCache');
    const FIFOCache = require('./src/js/policies/FIFOCache');

    // Example: Creating an LRU Cache
    const lruCache = new LRUCache(capacity);
    
    // Example: Creating an LFU Cache
    const lfuCache = new LFUCache(capacity);
    
    // Example: Creating a FIFO Cache
    const fifoCache = new FIFOCache(capacity);
    ```

2. Use the cache methods to add, retrieve, or remove items:
    ```javascript
    lruCache.put(1, "Data1");
    const value = lruCache.get(1);
    lfuCache.put(2, "Data2");
    fifoCache.put(3, "Data3");
    ```

## Examples

- **LRU Example**:
    ```javascript
    const cache = new LRUCache(2);
    cache.put(1, "A");
    cache.put(2, "B");
    cache.get(1); // Accesses "A", making it the most recently used
    cache.put(3, "C"); // Evicts the least recently used (2, "B")
    ```

- **LFU Example**:
    ```javascript
    const cache = new LFUCache(2);
    cache.put(1, "X");
    cache.put(2, "Y");
    cache.get(1); // Increases frequency of "X"
    cache.put(3, "Z"); // Evicts the least frequently used (2, "Y")
    ```

- **FIFO Example**:
    ```javascript
    const cache = new FIFOCache(2);
    cache.put(1, "First");
    cache.put(2, "Second");
    cache.put(3, "Third"); // Evicts the first inserted item (1, "First")
    ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

