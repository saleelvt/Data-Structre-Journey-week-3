class Node{
    constructor(){
    this.children ={};
    this.isWordEnd=false    
    }
}

class Trie{
    constructor(){
        this.root=new Node();
    }
    insert(word){
        let curr =this.root;
        for(let i=0;i<word.length;i++){
             let charToInsert=word[i]
             if(!(charToInsert in curr.children)){
                curr.children[charToInsert]= new Node()
             }
             curr=curr.children[charToInsert];

        }

      curr.isWordEnd=true
}

contain(word){
    let curr=this.root
    for(let i=0;i<word.length;i++){
        let charTofind=word[i]

        if(!(charTofind in curr.children)){
            return false  
        }
        curr =curr.children[charTofind]
    }
    return curr.isWordEnd;
}
dispalay(){

    console.log('saleel');
}

}
const list =new Trie()

list.insert('saleel')
list.insert('salee')
console.log(list.contain('salee'));