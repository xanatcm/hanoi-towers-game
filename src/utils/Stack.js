class Node {
  constructor(value) {
    this.id = `Tile-${value}`;
    this.value = value;
    this.width = 2 * value;
    this.next = null;
  }
}

class Stack {
  constructor(size) {
    //Atributos
    this.top = null; //Puntero
    this.maxSize = size;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.size !== this.maxSize && !this.top) {
      this.top = newNode;
    } else if (this.size !== this.maxSize && this.top) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      return console.log("Error: la pila está llena");
    }
    this.size++;
    return this;
  }

  peek() {
    return this.top;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    const topNode = this.top;
    this.top = this.top.next;
    this.size--;
    return topNode;
  }

  traverse() {
    let currNode = this.top;
    let list = [];
    while (currNode) {
      list.push(currNode);
      currNode = currNode.next;
    }
    return list;
  }
}

export default Stack;
