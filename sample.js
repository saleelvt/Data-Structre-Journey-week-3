
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
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
        if(!root){
            return false
        }
        

        if(node.value<root.value){
            if(root.left===null){
                    root.left=node
            }else{
              this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(this.right,node)
            }
        }

    }

    preOrder(root){

        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)


        }
    }
}
const list =new BST()
list.insert(10)
list.insert(10)
list.insert(10)
list.insert(10)
list.insert(10)
console.log("is empty or nodt ",list.isEmpty());