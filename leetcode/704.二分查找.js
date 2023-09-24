/* 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */

/* 
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找
var search = function(nums, target) {
  let left=0;//左边界
  let right = nums.length-1;//右边界
  while(left<=right){
    let middle = left+parseInt((right-left)/2);//中间位置
    if(nums[middle]>target){//当中间大于目标值
      right = middle-1;//把中间赋值为右边界
    }else if(nums[middle]<target){
      left=middle+1;//把中间赋值为左边界
    }else{
      return middle//中间值为目标值
    }


  }
  return -1;//目标值不在数组中

};
nums = [-1,0,3,5,9,12,32];
console.log(search(nums,5));

