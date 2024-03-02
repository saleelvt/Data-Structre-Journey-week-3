

class Node{
    constructor(value){

        this.value=value
        this.right=null
        this.left=null

    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){

            this.root=node
        }else{
            return this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){

        if(node.value<root.value){

            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                return this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        
        if(!root){
            return false
        }
         if(root.value==value){

            return true
        }else if(value<root.value){

            return this.search(root.left,value)
        }else{

            return this.search(root.right,value) 
        }

    }
    preOrder(root){

        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root ){
        if(root ){

            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){

            if(root){
                this.postOrder(root.left)
                this.postOrder(root.right)
                console.log(root.value);
            }
    }


}
const list =new BinarySearchTree()

list.insert(10)
list.insert(5)
list.insert(15)
list.insert(3)
list.insert(7)
list.search(list.root,10)
list.postOrder(list.root)


console.log('my list is empty ',list.isEmpty());