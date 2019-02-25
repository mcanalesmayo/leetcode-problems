/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // Very similar to 'Number of Islands'
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    
    let maxIslands = 0;
    
    function recExploreIsland(grid, i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) {
            return 0;
        }
        
        grid[i][j] = 0;
        return recExploreIsland(grid, i, j - 1)
            + recExploreIsland(grid, i - 1, j)
            + recExploreIsland(grid, i + 1, j)
            + recExploreIsland(grid, i, j + 1)
            + 1;
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                maxIslands = Math.max(maxIslands, recExploreIsland(grid, i, j));
            }
        }
    }
    
    return maxIslands;
};
