/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    const pointLookup = new Set();

    for (const [xCoord, yCoord] of points) {
        pointLookup.add(`${xCoord},${yCoord}`);
    }

    let minimumArea = Infinity;

    for (let firstPoint = 0; firstPoint < points.length; firstPoint++) {
        const [x1, y1] = points[firstPoint];

        for (
            let secondPoint = firstPoint + 1;
            secondPoint < points.length;
            secondPoint++
        ) {
            const [x2, y2] = points[secondPoint];

            if (x1 === x2 || y1 === y2) {
                continue;
            }

            if (
                pointLookup.has(`${x1},${y2}`) &&
                pointLookup.has(`${x2},${y1}`)
            ) {
                const currentArea =
                    Math.abs(x1 - x2) *
                    Math.abs(y1 - y2);

                minimumArea = Math.min(
                    minimumArea,
                    currentArea
                );
            }
        }
    }

    return minimumArea === Infinity
        ? 0
        : minimumArea;
};