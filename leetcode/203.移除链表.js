

/* 
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5] 
*/

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var removeElements = function (head, val) {
  const ret = new ListNode(0, head);
  let cur = ret;

  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return cur;
};

let head = [1, 2, 6, 3, 4, 5, 6];
let val = 6;
console.log(removeElements(head, val));