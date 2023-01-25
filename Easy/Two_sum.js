var twoSum = function(nums, target) {
    var ret = [];
    var exist = {};
    for(var i = 0; i < nums.length; i++){
        if(typeof(exist[target - nums[i]]) !== 'undefined'){
            ret.push(exist[target - nums[i]]);
            ret.push(i + 1);
        }
        
        exist[nums[i]] = i + 1;
    }
    
    return ret
};

const nums1 = [2,7,11,15];


meanboy = (weirdoc) => {
    return weirdoc.reduce((a, b) => a + b) / weirdoc.length;
}

console.log(twoSum(nums1, 9));
