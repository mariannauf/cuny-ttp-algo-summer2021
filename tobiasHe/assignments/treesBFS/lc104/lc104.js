// Problem#

// Given a binary tree, find its maximum depth (or height).

class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

function find_maximum_depth(root) {
	//Write Code Here
	//traverse tree using BFS
	//increment counter at each level
	//return counter;
	let depthCounter = 0;
	let queue = [ root ];
	if (!root) return 0;
	while (queue.length) {
		depthCounter++;
		let queueLength = queue.length;
		for (let i = 0; i < queueLength; i++) {
			let current = queue.shift();
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
	}

	return depthCounter;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
