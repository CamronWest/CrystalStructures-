var findMedianSortedArrays = function(nums1, nums2) {
    var size = (nums1.length + nums2.length);
    
    if(size == 0) return null;
    if(size == 1) return nums1.length > 0 ? nums1[0] : nums2[0];

    var median = (size + 1)/2
    var medianMin = Math.floor(median);
    var medianMax = Math.ceil(median);
    var result = new Int32Array(medianMax);

    let i=0,j=0;

    while(i + j <= medianMax) {
        if(nums1[i] < nums2[j] || nums2[j] === undefined){
            result[i+j] = nums1[i++];
        } else {
            result[i+j] = nums2[j++];
        }
    }
    //return result;
    return (result[--medianMin] + result[--medianMax])/2;


};