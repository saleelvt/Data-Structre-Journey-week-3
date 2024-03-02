// // //BST

// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }

//     insert(value){
//         const newNode= new Node(value)
//         if(this.root===null){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     isEmpty(){
//         return this.root===null
//     }

//     insertNode(root,newNode){        
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right==null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }            
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else {
//             if(root.value===value){
//                 return true
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }      
//     }

//     preOrder(root){
//         if (root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if (root){            
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if (root){            
//             this.postOrder(root.left)           
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     levelOrder(){
//         const queue=[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if (curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
    
//     min(root){
//         if (!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if (root===null){
//             return root
//         }
//         if(value<root.value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if (!root.left){
//                 return root.right
//             }else if (!root.right){
//                 return root.left
//             }
//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst= new binarySearchTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(3)
// bst.insert(7)
// bst.insert(6)
// bst.insert(8)
// bst.insert(25)
// bst.insert(25)
// bst.insert(3)
// bst.insert(7)
// bst.delete(7)
// bst.levelOrder()
// console.log(bst.search(bst.root,250))
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// console.log(bst.isEmpty());
// bst.levelOrder(bst.root)



// class TreeNode {
//     constructor(val) {
//       this.val = val;
//       this.left = this.right = null;
//     }
//   }
  
//   function isBST(root, min = -Infinity, max = Infinity) {
//     if (!root) {
//       return true;
//     }
  
//     if (root.val <= min || root.val >= max) {
//       return false;
//     }
  
//     return (
//       isBST(root.left, min, root.val) && isBST(root.right, root.val, max)
//     );
//   }
  
//   // Example usage:
//   const tree = new TreeNode(2);
//   tree.left = new TreeNode(5);
//   tree.right = new TreeNode(3);
// //   tree.left.right = new TreeNode(4);
  
  
//   console.log(isBST(tree)); // Output: true



//Graph
// const matrix=[
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]
// console.log(matrix[2][2]);

// const list={
//     "A":["B"],
//     "B":["A","C"],
//     "C":["B"]
// }
// console.log(list["B"])

// class Graph{
//     constructor(){
//         this.adjacencyList={}
//     }

//     addVertex(vertex){
//         if (!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]=new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return(this.adjacencyList[vertex1].has(vertex2) && 
//         this.adjacencyList[vertex2].has(vertex1))

//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2) 
//         this.adjacencyList[vertex2].delete(vertex1) 
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let x of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,x)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + "=>"+ [...this.adjacencyList[vertex]]);
//         }
//     }
// }

// const graph=new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")

// graph.addEdge("A","B")
// graph.addEdge("B","C")
// // console.log(graph.hasEdge("A","C"))

// graph.display()
// // graph.removeEdge("A","B")
// graph.removeVertex("B")
// graph.display()

//Graph

// class Graph{
//     constructor(){
//         this.adjacencyList=[]
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]=new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjacencyList[vertex1].has(vertex2) &&
//             this.adjacencyList[vertex2].has(vertex1)

//             )
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removevertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }

//         for(let x of this.adjacencyList[vertex]){
//             this.removeEdge(x,vertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     display(){
//         for(let x in this.adjacencyList){
//             console.log(x + "=>"+[...this.adjacencyList[x]]);
//         }
//     }
// }

// const graph=new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdge("A","B")
// graph.addEdge("A","C")

// // console.log(graph.hasEdge("B","C"));


// graph.removeEdge("A","C")

// graph.display()



//Trie


// class Node{
//     constructor(){
//         this.children={}
//         this.isWordEnd=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root=new Node()
//     }

//     insert(word){
//         let curr=this.root
//         for(let i=0;i<word.length;i++){
//             let insertLetter=word[i]
//             if(!(insertLetter in curr.children)){
//                 curr.children[insertLetter]=new Node
//             }
//             curr=curr.children[insertLetter]
//         }
//         curr.isWordEnd=true
//     }

//     contains(word){
//         let curr=this.root
//         for(let i=0;i<word.length;i++){
//             let letterToFind=word[i]
//             if(!(letterToFind in curr.children)){
//                 return false
//             }
//             curr=curr.children[letterToFind]
//         }
//         return curr.isWordEnd
//     }
// }

// const trie=new Trie()
// trie.insert("apple")
// console.log(trie.contains("apple"));



//Heap

// class Heap{
//     constructor(){
//         this.data=[]
//     }
//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }
//     getleftChildIndex(i){
//         return 2*i+1
//     }
//     getRightChildIndex(i){
//         return 2*i+2
//     }
//     swap(i1,i2){
//         let temp=this.data[i1]
//         this.data[i1]=this.data[i2]
//         this.data[i2]=temp
//     }
//     push(key){
//         this.data[this.data.length]=key
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let currentIndex=this.data.length-1
//         while(this.data[currentIndex]>this.data[this.getParentIndex(currentIndex)]){
//             this.swap(currentIndex,this.getParentIndex(currentIndex))
//             currentIndex=this.getParentIndex(currentIndex)
//         }        
//     }

//     pop(){
//         const maxValue=this.data[0]
//         this.data[0]=this.data[this.data.length-1]
//         this.data.length--
//         this.heapifyDown()
//         return maxValue
//     }
//     heapifyDown(){
//         let currentIndex=0
//         while(this.data[this.getleftChildIndex(currentIndex)]!=undefined){
//             let biggestChildIndex=this.getleftChildIndex(currentIndex)
//             if(this.data[this.getRightChildIndex(currentIndex)]!=undefined &&
//             this.data[this.getRightChildIndex(currentIndex)]>this.data[this.getleftChildIndex(currentIndex)]
//             ){
//                 biggestChildIndex=this.getRightChildIndex(currentIndex)

//             }
//             if(this.data[currentIndex]<this.data[biggestChildIndex]){
//                 this.swap(currentIndex,biggestChildIndex)
//                 currentIndex=biggestChildIndex
//             }else{
//                 return
//             }
//         }
//     }
// }

// const heap=new Heap()
// console.log(heap);
// heap.push(25)
// heap.push(5)
// heap.push(40)
// heap.push(70)
// heap.push(90)
// heap.push(44)

// console.log(heap.data.join(","));

// let a=[]
// for(let i=0;i<6;i++){
//     a.push(heap.pop())
// }
// console.log(a);