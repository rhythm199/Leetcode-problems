/**
 * @param {number[][]} points
 * @return {number}
 */
var maxRectangleArea = function(points) {
    const pointSet = new Set();

    for (const [x, y] of points) {
        pointSet.add(`${x},${y}`);
    }

    let maximumArea = -1;

    for (let first = 0; first < points.length; first++) {
        const [x1, y1] = points[first];

        for (let second = first + 1; second < points.length; second++) {
            const [x2, y2] = points[second];

            if (x1 === x2 || y1 === y2) {
                continue;
            }

            if (
                !pointSet.has(`${x1},${y2}`) ||
                !pointSet.has(`${x2},${y1}`)
            ) {
                continue;
            }

            const minX = Math.min(x1, x2);
            const maxX = Math.max(x1, x2);
            const minY = Math.min(y1, y2);
            const maxY = Math.max(y1, y2);

            let isValidRectangle = true;

            for (const [px, py] of points) {
                if (
                    px >= minX &&
                    px <= maxX &&
                    py >= minY &&
                    py <= maxY &&
                    !(
                        (px === x1 && py === y1) ||
                        (px === x1 && py === y2) ||
                        (px === x2 && py === y1) ||
                        (px === x2 && py === y2)
                    )
                ) {
                    isValidRectangle = false;
                    break;
                }
            }

            if (isValidRectangle) {
                maximumArea = Math.max(
                    maximumArea,
                    (maxX - minX) * (maxY - minY)
                );
            }
        }
    }

    return maximumArea;
};