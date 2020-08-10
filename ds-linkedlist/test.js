var ll = require("./linked-list");
const Node = ll.Node;
const LinkedList = ll.LinkedList;


var node1 = new Node(5, null);
var list = new LinkedList();
list.head = node1;

// add to the tail
var node2 = new Node(12, null);
list.head.next = node2;

// add to the head
// var node3 = new Node(2, null);
// node3.next = list.head;
// list.head = node3;
// list.insertFirst(2);
// list.insertLast(20);

// add this node after "Node with data 5"
// svar node4 = new Node(6, null);



// console.log(list);

// console.log( list.getFirst());
// console.log( list.getLast());
// console.log( list.getAt(2));

list.insertAt(13, 1);
list.removeAt(3);

console.log( list );

var len = list.size()
console.log( "size: ", len);


console.log("list =============");
var newList = genLinkedList(11);
newList.printLinkedList();
// reserve it
console.log("reversed =============");
// newList.reverse();
newList.recursiveReverse(newList.head);
newList.printLinkedList();

console.log("is it a loop? ========");
console.log( newList.isLoop() );

function genLinkedList(n) {
    var list = new LinkedList();
    var node0 = new Node(0, null);

    list.head = node0;
    var last = node0;

    for(var i=1; i<n; i++) {
        var node = new Node(i, null);
        last.next = node;
        last = node;
    }

    return list;
}


// find the merge point of two linked list
console.log("======== find the merge point ======");
// var listC = genLinkedList(10);
// listC.printLinkedList();

var list1 = genLinkedList(10);
var commonNode = list1.getFirst();

list1.insertFirst("C");
list1.insertFirst("B");
list1.insertFirst("A");
list1.printLinkedList();

var list2 = genLinkedList(10);
list2.insertFirst("15");
list2.insertFirst("14");
list2.insertFirst("13");
list2.insertFirst("12");
list2.insertFirst("11");
list2.printLinkedList();

function findMergePoint(l1, l2)
{
    var len1 = l1.size();
    var len2 = l2.size();
    console.log("length: " + len1 + "  and " + len2);
    var p1Curr = l1.head;
    var p2Curr = l2.head;

    if( len1 >= len2 ) {
        var diff = len1 - len2;
        console.log("list1 is longer: " + diff);

        while( diff > 0 )
        {
            p1Curr = p1Curr.next;
            diff--;
        }
    }
    else {
        var diff = len2 - len1;
        console.log("list2 is longer: " + diff);
        while (diff > 0 )
        {
            p2Curr = p2Curr.next;
            diff--;
        }
    }

    console.log("Debug: " + p1Curr.data + " " + p2Curr.data);

    while( p1Curr != null && p2Curr !=null ) {
        if( p1Curr.data == p2Curr.data) {
            console.log("Found the merge point: " + p1Curr.data);
            return;
        }
        p1Curr = p1Curr.next;
        p2Curr = p2Curr.next;
    }
    console.log("No merge point");
}

// call the function
findMergePoint(list1, list2);

function findMergePointWithoutCounting(l1, l2) {
    var p1Curr = l1.head;
    var p2Curr = l2.head;
    var l1Loop = 0;
    var l2Loop = 0;
    console.log("the head node: " + p1Curr.data + " " + p2Curr.data);

    while(true) {
        if( p1Curr.data == p2Curr.data) {
            console.log("find the merge point: " + p1Curr.data);
            return;
        }

        if( p1Curr.next != null ) {
            p1Curr = p1Curr.next;
        }
        else {
            p1Curr = l2.head;
            l1Loop++;
            if(l1Loop > 1) {
                console.log("No merge point");
                break;
            }
        }

        if( p2Curr.next != null ) {
            p2Curr = p2Curr.next;
        } else {
            p2Curr = l1.head;
            l2Loop++;
            if(l2Loop > 1) {
                console.log("No merge point");
                break;
            }
        }
    }
}

findMergePointWithoutCounting(list1, list2);
