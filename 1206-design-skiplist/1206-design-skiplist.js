var Skiplist = function() {
    this.arr = [];
};

Skiplist.prototype.search = function(target) {
    return this.arr.includes(target);
};

Skiplist.prototype.add = function(num) {
    let i = 0;

    while (
        i < this.arr.length &&
        this.arr[i] < num
    ) {
        i++;
    }

    this.arr.splice(i, 0, num);
};

Skiplist.prototype.erase = function(num) {
    const idx = this.arr.indexOf(num);

    if (idx === -1) return false;

    this.arr.splice(idx, 1);
    return true;
};