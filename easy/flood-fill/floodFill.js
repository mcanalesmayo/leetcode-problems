/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let currColor = image[sr][sc];
    if (currColor === newColor) {
        return image;
    }
    
    function recFloodFill(image, sr, sc, currColor, newColor, width, height) {
        if (sr - 1 >= 0 && image[sr-1][sc] === currColor) {
            image[sr-1][sc] = newColor;
            recFloodFill(image, sr-1, sc, currColor, newColor, width, height);
        }
        
        if (sr + 1 < height && image[sr+1][sc] === currColor) {
            image[sr+1][sc] = newColor;
            recFloodFill(image, sr+1, sc, currColor, newColor, width, height);
        }
        
        if (sc - 1 >= 0 && image[sr][sc-1] === currColor) {
            image[sr][sc-1] = newColor;
            recFloodFill(image, sr, sc-1, currColor, newColor, width, height);
        }
        
        if (sc + 1 < width && image[sr][sc+1] === currColor) {
            image[sr][sc+1] = newColor;
            recFloodFill(image, sr, sc+1, currColor, newColor, width, height);
        }
    }
    
    image[sr][sc] = newColor;
    recFloodFill(image, sr, sc, currColor, newColor, image[0].length, image.length);
    return image;
};
