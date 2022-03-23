class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    find(value){
        let currNode = this.head;
        while(currNode.value !== value){
            currNode = currNode.next;
        }
        return currNode
    }

    append(newValue){
        const newNode = new Node(newValue);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    insert(node, newValue){
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
    }
    remove(value){
        let prevNode = this.head;
        while(prevNode.next.value !== value){
            prevNode = prevNode.next;
        }

        if(prevNode.value === null){
            prevNode.next = prevNode.next.next;
        }
    }

    display(){
        let currNode = this.head;
        let displayString = "[";
        while(currNode !== null){
            displayString += `${currNode.value}, `;
            currNode = currNode.next;
        }
        displayString = displayString.substring(0, displayString.length - 2);
        displayString += "]";
        console.log(displayString);
    }

    size(){
        let currNode = this.head;
        let cnt = 0;
        while(currNode !== null){
            cnt += 1;
            currNode = currNode.next;
        }
        return cnt
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
// linkedList.append(4);
// linkedList.append(5);
linkedList.display();
console.log(linkedList.head)
// console.log(linkedList.find(2));
console.log(linkedList.size());
