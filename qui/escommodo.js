function Node$1(data) {
    this.data = data; // Store the data passed to the node
    this.next = null; // Initialize the next pointer to null
}

// Example usage:
let node1 = new Node$1(10);
let node2 = new Node$1(20);

// Linking the nodes
node1.next = node2;

// Printing the values
console.log(node1.data); // Output: 10
console.log(node1.next.data); // Output: 20
