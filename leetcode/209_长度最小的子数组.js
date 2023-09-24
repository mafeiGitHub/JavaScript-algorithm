/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
let start,end;
start = end =0;
let sum = 0;
let len = nums.length;
let ans = Infinity;
while(end<len){
  sum+=nums[end];
  while(sum>=target){
    ans = Math.min(ans,end-start+1)
    sum-=nums[start];
    start++;
  }
  end++
}
return ans === Infinity?0:ans

};
let nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(8,nums));