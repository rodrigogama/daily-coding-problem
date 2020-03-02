const NODE_END = '*';

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(t) {
  let outputs = [];

  function serializer(node, output) {
    if (!node) {
      output.push(NODE_END);
      return;
    };

    output.push(node.val);
    serializer(node.left, output);
    serializer(node.right, output);
  }

  serializer(t, outputs);
  return outputs.join(',');
}

function deserialize(s) {
  const nodes = s.split(',');
  let index = 0;

  function deserializer(arr) {
    if (index > arr.length || arr[index] === NODE_END){
      return null;
    }
    
    const node = new Node(arr[index]);
    index += 1;
    node.left = deserializer(arr);
    index += 1;
    node.right = deserializer(arr);

    return node;
  }
 
 return deserializer(nodes);
}

function init() {
  const tree = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
  const serializedTree = serialize(tree);
  const deserializedTree = deserialize(serializedTree);
  console.log(JSON.stringify(tree) === JSON.stringify(deserializedTree));
  console.log(deserializedTree.left.left.val === tree.left.left.val);
}

init();