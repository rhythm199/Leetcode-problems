/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);

    let currMass = BigInt(mass);

    for (const asteroid of asteroids) {
        if (currMass < BigInt(asteroid)) {
            return false;
        }

        currMass += BigInt(asteroid);
    }

    return true; 
};