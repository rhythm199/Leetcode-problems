/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let res = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : (res += leftMax - height[left]);
            left++;
        } else {
            height[right] >= rightMax ? (rightMax = height[right]) : (res += rightMax - height[right]);
            right--;
        }
    }

    return res;
};