class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(num) {
        let node = this.root;

        for (let i = 17; i >= 0; i--) {
            let bit = (num >> i) & 1;

            if (!node.children[bit]) {
                node.children[bit] = new TrieNode();
            }

            node = node.children[bit];
            node.count++;
        }
    }

    remove(num) {
        let node = this.root;

        for (let i = 17; i >= 0; i--) {
            let bit = (num >> i) & 1;

            node = node.children[bit];
            node.count--;
        }
    }

    maxXor(num) {
        let node = this.root;
        let ans = 0;

        for (let i = 17; i >= 0; i--) {
            let bit = (num >> i) & 1;
            let opposite = 1 - bit;

            if (
                node.children[opposite] &&
                node.children[opposite].count > 0
            ) {
                ans |= (1 << i);
                node = node.children[opposite];
            } else {
                node = node.children[bit];
            }
        }

        return ans;
    }
}

var maxGeneticDifference = function(parents, queries) {
    const n = parents.length;

    const tree = Array.from({ length: n }, () => []);
    let root = -1;

    for (let i = 0; i < n; i++) {
        if (parents[i] === -1) {
            root = i;
        } else {
            tree[parents[i]].push(i);
        }
    }

    const qmap = Array.from({ length: n }, () => []);

    for (let i = 0; i < queries.length; i++) {
        const [node, val] = queries[i];
        qmap[node].push([val, i]);
    }

    const result = Array(queries.length);
    const trie = new Trie();

    function dfs(node) {
        trie.insert(node);

        for (const [val, idx] of qmap[node]) {
            result[idx] = trie.maxXor(val);
        }

        for (const child of tree[node]) {
            dfs(child);
        }

        trie.remove(node);
    }

    dfs(root);

    return result;
};