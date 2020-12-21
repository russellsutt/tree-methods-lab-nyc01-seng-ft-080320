

function inOrder(currentNode) {
    console.log(currentNode.data)
    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}


function findOrAdd(currentNode, newNode) {
    if (currentNode.data === newNode.data) {
        return true
    }
    if (newNode.data < currentNode.data) {
        return currentNode.left ? findOrAdd(currentNode.left, newNode) : currentNode.left = newNode
    }
    if (newNode.data > currentNode.data) {
        return currentNode.right ? findOrAdd(currentNode.right, newNode) : currentNode.right = newNode
    }
}

function max(currentNode) {
    if (currentNode.right) {
        return max(currentNode.right)
    } else {
        return currentNode
    }
}

function min(currentNode) {
    if (currentNode.left) {
        return min(currentNode.left)
    } else {
        return currentNode
    }
}