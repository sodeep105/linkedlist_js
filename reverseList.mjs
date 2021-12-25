// Write a function that reverses a linked list and returns the head
export const reverseList = (head) => {
    let current = head;
    let prev = null;
    while (current != null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;


    }

    return prev;
}