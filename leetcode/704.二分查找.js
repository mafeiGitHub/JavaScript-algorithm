


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 二分查找
const search = function(nums, target) {
  let left=0;//左边界
  let right = nums.length-1;//右边界
  while(left<=right){
    let middle = left+Math.round((right-left)/2);//中间位置
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
nums = [-1,0,3,5,9,12];
console.log(search(nums,9));

