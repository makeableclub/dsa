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
var newList = genLinkedList(10);
newList.printLinkedList();
// reserve it
console.log("reversed =============");
// newList.reverse();
newList.recursiveReverse(newList.head);
newList.printLinkedList();



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
