var MyHashMap = function() {
    this.map = new Array(1000001).fill(-1);
};

MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value;
};

MyHashMap.prototype.get = function(key) {
    return this.map[key];
};

MyHashMap.prototype.remove = function(key) {
    this.map[key] = -1;
};