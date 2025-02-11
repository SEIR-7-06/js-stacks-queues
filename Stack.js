class Stack {
    constructor() {
        this.items = []
    }
    // your code here...
    push(item) {
        // push() takes an input item and adds it to this.items
        // (to the top of the stack)
        this.items.push(item)
    }
    pop() {
        // pop() removes an item from the top of the stack
        // then returns the removed item
        return this.items.pop()
    }
    peek() {
        // return the top item in the stack w/o removing it
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        // returns true or false based on whether the stack 
        // is empty or not
        if(this.items.length === 0) {
            return true
        } else {
            return false
        }
    }
}

// Test Code
const myStack = new Stack()
console.log('\n⛓️ Test #1: Is stack empty on initialization?')
if(myStack.isEmpty()) {
    console.log('✅️ Test Passes: isEmpty returns true')
} else {
    console.log('🚫 Test Fails: isEmpty does not return true')
}

console.log('\n⛓️ Test #2: Are stack items in correct order after pushing multiple items?')
console.log('Expecting to see: [A, B, C]')
myStack.push('A')
myStack.push('B')
myStack.push('C')
if(myStack.items[0] === 'A' && myStack.items[1] === 'B' && myStack.items[2] === 'C') {
    console.log('✅️ Test Passes: Items are in correct order')
} else {
    console.log('🚫 Test Fails: Items are not in correct order')
}

console.log('\n⛓️ Test #3: Is stack not empty after push? isEmpty() should return false.')
if(myStack.isEmpty() === false) {
    console.log('✅️ Test Passes: isEmpty returns false')
} else {
    console.log('🚫 Test Fails: isEmpty does not return false')
}

console.log('\n⛓️ Test #4: Does pop return the top item from the stack?')
let item = myStack.pop()
if(item === 'C' && myStack.items.length === 2) {
    console.log('✅️ Test Passes: C was removed')
} else {
    console.log('🚫 Test Fails: either C was not removed, or the items array did not change')
}

console.log('\n⛓️ Test #5: Does peek return the top item from the stack without removing it?')
let anotherItem = myStack.peek()
if(anotherItem === 'B' && myStack.items.length === 2) {
    console.log('✅️ Test Passes: B was returned but not removed')
} else {
    console.log('🚫 Test Fails: either B was removed or not returned')
}