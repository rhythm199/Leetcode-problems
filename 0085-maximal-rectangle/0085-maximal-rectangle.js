/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0;

    let n = matrix[0].length;
    let heights = new Array(n).fill(0);
    let maxArea = 0;

    for (let row of matrix) {
    
        for (let j = 0; j < n; j++) {
            heights[j] = row[j] === '1' ? heights[j] + 1 : 0;
        }

        
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};


function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;

    heights.push(0); 

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let right = i;
            let left = stack.length ? stack[stack.length - 1] : -1;
            let width = right - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    heights.pop(); 
    return maxArea;
};