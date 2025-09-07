/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let result = [];
  
  while (i < nums1.length && j < nums2.length) {
    if(nums1[i][0] === nums2[j][0]) {
      result.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      i++;
      j++;
    } else if(nums1[i][0] < nums2[j][0]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }
  
  result.push(...nums1.slice(i));
  result.push(...nums2.slice(j));
  
  return result;
};
