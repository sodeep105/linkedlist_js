// Write a function that takes the node of a list as an argument and returns an array containing all values of the node.
export const linkedlistValues = (head) => {
    const values = [];
    let current = head;
    while (current != null) {
        values.push(current.val);
        current = current.next;

    }
    return values;
}
// module.exports = linkedlistValues;
