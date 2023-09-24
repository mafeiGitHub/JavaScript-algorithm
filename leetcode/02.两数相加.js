/* 输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let list = new ListNode()
  let p1 = l1
  let p2 = l2
  let p3 = list
  let ones = 0, tens = 0, temp = 0, beginning = true
  while(p1 || p2){
      if(beginning == false){
          p3.next = new ListNode()
          p3 = p3.next
      }
      let a = p1? p1.val:0
      let b = p2? p2.val:0
      ones = (a + b + temp) % 10
      tens = Math.floor((a + b + temp)/10)
      p3.val = ones
      temp = tens
      if(p1 != null)p1 = p1.next
      if(p2 != null)p2 = p2.next
      beginning = false
  }
  if(temp) p3.next = new ListNode(temp)
  return list
};

