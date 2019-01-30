/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let res = 0, sideLen = grid.length, horizontal = new Array(sideLen).fill(0), vertical = horizontal.slice();
    
    for (let i = 0; i < sideLen; i++) {
        for (let j = 0; j < sideLen; j++) {
            let cell = grid[i][j];
            if (horizontal[j] < cell) {
                horizontal[j] = cell;
            }
            if (vertical[i] < cell) {
                vertical[i] = cell;
            }
        }
    }
    
    for (let i = 0; i < sideLen; i++) {
        for (let j = 0; j < sideLen; j++) {
            let cell = grid[i][j];
            res += horizontal[j] > vertical[i] ? vertical[i] - cell : horizontal[j] - cell;
        }
    }
    
    return res;
};
