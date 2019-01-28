/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let nums1Map = {}, intersection = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums1Map[nums1[i]]) {
            nums1Map[nums1[i]]++;
        } else {
            nums1Map[nums1[i]] = 1;
        }
    }
    
    for (let i = 0; i < nums2.length; i++) {
        if (nums1Map[nums2[i]] && nums1Map[nums2[i]] > 0) {
            intersection.push(nums2[i]);
            nums1Map[nums2[i]]--;
        }
    }
    
    return intersection;
};
