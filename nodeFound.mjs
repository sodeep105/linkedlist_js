
//recursive function to find a node
export const nodeFound = (head, target) => {
    if (head == null) return "pai nai";
    if(head.value == target) return "paisi";
    return nodeFound(head.next, target);

}

//iterative function to find a node
export const nodeFoundIter = (head, target) => {
    let current = head;
    while (current != null) {
        if(current.val == target){
            return true;
        }
        current = current.next;
    }
    return false;
}