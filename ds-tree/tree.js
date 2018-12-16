// binary tree node
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    addData(data) {
        var node = new Node(data, null, null);
        if( this.root == null ) {
            this.root = node;
            return;
        }

        var currNode = this.root;
        while( currNode != null ) {
            if( data < currNode.data ) {
                if( currNode.left == null ) {
                    currNode.left = node;
                    break;
                }
                else {
                    // traverse
                    currNode = currNode.left;
                }
            }
            else {
                if( currNode.right == null ) {
                    currNode.right = node;
                    break;
                }
                else {
                    // traverse
                    currNode = currNode.right;
                }
            }
        }
        // by this time, we get to the bottom
        console.log("got here?")
        currNode = node;

        // if( data < this.root.data) {
        //     this.root.left = node;
        // }
        //

        // var random = Math.random();
        // if( random < 0.5 ) {
        //
        // }
    }
}

module.exports = { Node, BinarySearchTree };