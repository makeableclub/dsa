class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        var node = new Node(data, this.head);
        this.head = node;
    }

    insertLast(data) {
        var pCurr = this.head;
        while(pCurr.next != null) {
            pCurr = pCurr.next;
        }
        var node = new Node(data, null);
        pCurr.next = node;
    }

    size() {
        var count = 1;
        var p = this.head;
        while( p.next != null) {
            p = p.next;
            count++;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        var p = this.head;
        while(p.next != null) {
            p = p.next;
        }
        return p;
    }


    getAt(index){
        // var count = 0;  starting from 0
        var count = 1;  // starting from 1
        var p = this.head;

        while(count < index) {
            p = p.next;
            count++;
        }

        return p;
    }

    insertAt(data, index) {
        if(index == 0) {
            return this.insertFirst(data);
        }

        var p = this.head;
        var prev = this.head;
        for( var i=0; i<index; i++) {
            prev = p;
            p = p.next;
        }

        var n = new Node(data, prev.next);
        prev.next = n;
    }

    removeAt(index) {
        if( index == 0) {
            this.head = this.head.next;
            return;
        }
        var p = this.head;
        var prev = this.head;
        for( var i=0; i<index; i++) {
            prev = p;
            p = p.next;
        }

        if (prev.next != null)
            prev.next = prev.next.next;
    }

    printLinkedList() {
        var p = this.head;
        while( p != null) {
            console.log(p.data);
            p = p.next;
        }
    }

    reverse() {
        var curr = this.head;
        var prev = null;
        var next = null;

        while (curr != null) {
            // keep it live
            next = curr.next;
            // do the switch
            curr.next = prev;
            // move forward
            prev = curr;
            curr = next;
        }
        // give the head
        this.head = prev;
    }

    recursiveReverse(current) {
        // base condition
        if( current.next == null ) {
            this.head = current;
            return current;
        }

        // split the list into "first node" and remaining
        // var node = current;
        // var rest = current.next;

        this.recursiveReverse(current.next);

        // restReversed.next = current;
        current.next.next = current;
        current.next = null;

        return this.head;
    }

    isLoop() {
        var pFast = this.head;
        var pSlow = this.head;

        while( pFast!= null && pFast.next != null) {
            pFast = pFast.next.next;
            pSlow = pSlow.next;

            if( pFast == pSlow) {
                return true;
            }
        }

        return false;
    }
}

module.exports = { Node, LinkedList };
