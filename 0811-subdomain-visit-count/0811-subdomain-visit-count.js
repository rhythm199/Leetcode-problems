/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = new Map();

    for (const item of cpdomains) {
        const [countStr, domain] = item.split(" ");
        const count = Number(countStr);

        const parts = domain.split(".");

        for (let i = 0; i < parts.length; i++) {
            const subdomain = parts.slice(i).join(".");

            map.set(subdomain, (map.get(subdomain) || 0) + count);
        }
    }

    const result = [];

    for (const [domain, count] of map) {
        result.push(`${count} ${domain}`);
    }

    return result;
};