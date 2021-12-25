import * as lib from './linkedlist-values.mjs';
import * as lib1 from './sumList.mjs';
import * as lib2 from './nodeFound.mjs';
import * as lib3 from './getVal.mjs';
import * as reverse from './reverseList.mjs';


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

// a->b->c->d->NULL

//iterative
const printLinkedList = (head) => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}

printLinkedList(a);


//recursive
const printLinkedListRecursive = (head) => {
    if (head == null) return;
    console.log(head.val);
    printLinkedListRecursive(head.next);
}

printLinkedListRecursive(a);


//a function that takes the node of a list as an argument and returns an array containing all values of the node.
console.log(lib.linkedlistValues(a));

// printing sum of all the nodes of a linkedlist
console.log(lib1.sumList(a));

//searching for a target node
console.log(lib2.nodeFoundIter(a,1));

//retrieving value of a node at a particular index
console.log(lib3.getVal(a,1));

//retrieving value of a node at a particular index
console.log(reverse.reverseList(a));






