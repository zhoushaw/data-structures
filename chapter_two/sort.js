/*
	冒泡排序 时间复杂度O(n^2)	读作big O(欧) n
	选择排序 时间复杂度O(n^2)	
	插入排序 时间复杂度O(n^2)	

	归并排序	时间复杂度O(N*logN);
	快速排序	O(N*logN);
	堆排序 O(N*logN)
	希尔排序 O(N*logN)
*/
function ReverseList(pHead)
{
    var pre = null;
    var next = null;
    while(pHead.next!=null){
        next = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    
    return pHead;
}
var obj = {
	value: 1,
	next: {
		value: 2,
		next:{
			value: 3,
			next: {
				value: 4
			}
		}
	}
}
console.log(ReverseList(obj));