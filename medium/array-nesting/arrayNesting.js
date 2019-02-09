/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    // The problem can be considered as finding the longest path in a graph
    // which is represented by the input array
    
    if (nums.length <= 1) {
        return nums.length;
    }
    
    let max = 0;

    // Will keep track of visited nodes
    let visitedNodes = {}, visitedNodesCount = 0;
    function recLongestGraphPath(vertex, nodesCounter) {
        if (visitedNodes[vertex]) {
            return nodesCounter;
        }
        
        visitedNodesCount++;
        visitedNodes[vertex] = true;
        return recLongestGraphPath(nums[vertex], nodesCounter + 1);
    }

    // Make sure all paths are explored, but avoid exploring more paths if max is
    // greater than (N - nodes to visit)
    for (let i = 0; i < nums.length && max <= nums.length - visitedNodesCount; i++) {
        max = Math.max(max, recLongestGraphPath(i, 0));
    }
    
    return max;
};
