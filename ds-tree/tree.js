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

    inOrder(node) {
        // exit condition
        if(node === null) {
            return;
        }
        // 1. keep going left recursively
        this.inOrder(node.left);
        // 2. print out the node
        console.log(node.data);
        // 3. keeping going to the right
        this.inOrder(node.right);
    }

    preOrder(node) {
        // exit condition
        if(node === null) {
            return;
        }
        // 2. print out the node
        console.log(node.data);
        // 1. keep going left recursively
        this.preOrder(node.left);
        // 3. keeping going to the right
        this.preOrder(node.right);
    }

    postOrder(node) {
        // exit condition
        if(node === null) {
            return;
        }
        // 1. keep going left recursively
        this.postOrder(node.left);
        // 3. keeping going to the right
        this.postOrder(node.right);
        // 2. print out the node
        console.log(node.data);
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
