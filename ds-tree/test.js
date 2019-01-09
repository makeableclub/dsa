var tree = require("./tree");
const Node = tree.Node;
const BinarySearchTree = tree.BinarySearchTree;

// build a sample tree for testing
/*
var binaryTree = new BinarySearchTree();
binaryTree.addData(100);
binaryTree.addData(50);
binaryTree.addData(150);
binaryTree.addData(66);
*/
// instead of building a tree manually, let's create a funtion to generate it automatically
var binaryTree = buildTree(10);

console.log(binaryTree);
console.log("pre-order: ------");
binaryTree.preOrder(binaryTree.root);
console.log("in-order: ------");
binaryTree.inOrder(binaryTree.root);
console.log("post-order: ------");
binaryTree.postOrder(binaryTree.root);


// build a tree with random numbers, for total of "nodeCount" of tree nodes
function buildTree(nodeCount) {
    var binaryTree = new BinarySearchTree();
    for(var i=0; i<nodeCount; i++) {
        var data = Math.floor( Math.random()*1000 );  // a random number between 0 and 1000
        binaryTree.addData(data);
    }
    return binaryTree;
}
