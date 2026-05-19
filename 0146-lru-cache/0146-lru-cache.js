class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {

    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

LRUCache.prototype.insert = function(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
};

LRUCache.prototype.get = function(key) {

    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);

    this.remove(node);
    this.insert(node);

    return node.val;
};

LRUCache.prototype.put = function(key, value) {

    if (this.map.has(key)) {
        this.remove(this.map.get(key));
    }

    const node = new Node(key, value);

    this.insert(node);

    this.map.set(key, node);

    if (this.map.size > this.capacity) {

        const lru = this.tail.prev;

        this.remove(lru);

        this.map.delete(lru.key);
    }
};