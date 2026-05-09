/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
    const MOD = 1000000007;

    class Heap {
        constructor(compare) {
            this.heap = [];
            this.compare = compare;
        }

        size() {
            return this.heap.length;
        }

        peek() {
            return this.heap[0];
        }

        push(val) {
            this.heap.push(val);

            let i = this.heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);

                if (this.compare(this.heap[p], this.heap[i])) break;

                [this.heap[p], this.heap[i]] =
                    [this.heap[i], this.heap[p]];

                i = p;
            }
        }

        pop() {
            if (this.heap.length === 1) {
                return this.heap.pop();
            }

            const top = this.heap[0];

            this.heap[0] = this.heap.pop();

            let i = 0;

            while (true) {
                let best = i;
                let l = i * 2 + 1;
                let r = i * 2 + 2;

                if (
                    l < this.heap.length &&
                    !this.compare(this.heap[best], this.heap[l])
                ) {
                    best = l;
                }

                if (
                    r < this.heap.length &&
                    !this.compare(this.heap[best], this.heap[r])
                ) {
                    best = r;
                }

                if (best === i) break;

                [this.heap[i], this.heap[best]] =
                    [this.heap[best], this.heap[i]];

                i = best;
            }

            return top;
        }
    }

    const buy = new Heap((a, b) => a[0] > b[0]);
    const sell = new Heap((a, b) => a[0] < b[0]);

    for (let [price, amount, type] of orders) {

        if (type === 0) {

            while (
                amount > 0 &&
                sell.size() > 0 &&
                sell.peek()[0] <= price
            ) {
                let [sp, sa] = sell.pop();

                let matched = Math.min(amount, sa);

                amount -= matched;
                sa -= matched;

                if (sa > 0) {
                    sell.push([sp, sa]);
                }
            }

            if (amount > 0) {
                buy.push([price, amount]);
            }

        } else {

            while (
                amount > 0 &&
                buy.size() > 0 &&
                buy.peek()[0] >= price
            ) {
                let [bp, ba] = buy.pop();

                let matched = Math.min(amount, ba);

                amount -= matched;
                ba -= matched;

                if (ba > 0) {
                    buy.push([bp, ba]);
                }
            }

            if (amount > 0) {
                sell.push([price, amount]);
            }
        }
    }

    let ans = 0;

    while (buy.size()) {
        ans = (ans + buy.pop()[1]) % MOD;
    }

    while (sell.size()) {
        ans = (ans + sell.pop()[1]) % MOD;
    }

    return ans;
};