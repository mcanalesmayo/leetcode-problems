var maxArea = function(height) {
    let l = 0, r = height.length - 1, res = 0;

    while (l < r) {
        let iArea, bIsLeftLower = height[l] < height[r];
        
        if (bIsLeftLower) {
            iArea = height[l] * (r - l);
            l++;
        } else {
            iArea = height[r] * (r - l);
            r--;
        }

        if (iArea > res) {
            res = iArea;
        }
    }

    return res;
};