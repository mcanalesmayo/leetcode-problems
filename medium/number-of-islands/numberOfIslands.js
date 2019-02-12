/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    
    let nIslands = 0;
    
    function recExploreIsland(grid, i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0') {
            return;
        }
        
        grid[i][j] = '0';
        recExploreIsland(grid, i, j - 1);
        recExploreIsland(grid, i - 1, j);
        recExploreIsland(grid, i + 1, j);
        recExploreIsland(grid, i, j + 1);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                nIslands++;
                recExploreIsland(grid, i, j);
            }
        }
    }
    
    return nIslands;
};
