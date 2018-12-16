var tree = require("./tree");
const Node = tree.Node;
const BinarySearchTree = tree.BinarySearchTree;

// var node = new Node(10, null, null);
var binaryTree = new BinarySearchTree();
binaryTree.addData(100);
binaryTree.addData(50);
binaryTree.addData(150);

console.log(binaryTree);
