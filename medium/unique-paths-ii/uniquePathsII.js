/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    const m = obstacleGrid.length, n = obstacleGrid[0].length;
    
    // Reusing obstacleGrid as matrix storing number of ways to reach each cell
    for (let i = 0; i < m; i++) {
        // There's only one possible way to reach the cells in the first column,
        // unless theres an obstacle before. In that case there's no way to reach it
        if (obstacleGrid[i][0] === 1) {
            for (; i < m; i++) {
                obstacleGrid[i][0] = 0;
            }
            break;
        } else {
            obstacleGrid[i][0] = 1;
        }
    }
    
    for (let j = 1; j < n; j++) {
        // There's only one possible way to reach the cells in the first row,
        // unless theres an obstacle before. In that case there's no way to reach it
        if (obstacleGrid[0][j] === 1) {
            for (; j < n; j++) {
                obstacleGrid[0][j] = 0;
            }
            break;
        } else {
            obstacleGrid[0][j] = 1;
        }
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                // Obstacle => No ways to reach this cell
                obstacleGrid[i][j] = 0;
            } else {
                obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
            }
        }
    }
    
    return obstacleGrid[m-1][n-1];
};
