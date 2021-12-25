
// the function returns the value of a node at a specified index
export const getVal = (head, index) => {
    let current = head;
    let count = 0;
    while(current != null) {
        if(count == index) {
            return current.val;
        }
        current = current.next;
        count = count+1;

    }
    return null;
}