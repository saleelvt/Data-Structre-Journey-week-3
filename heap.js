

class Heap{
    constructor(){
        this.data=[]
    }
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    getleftChildIndex(i){
        return 2*i+1
    }
    getRightChildIndex(i){
        return 2*i+2
    }
    
    swap(i1,i2){
        let temp=this.data[i1]
        this.data[i1]=this.data[i2]
        this.data[i2]=temp
    }
    push(key){
        this.data[this.data.length]=key
        this.heapifyUp()
    }
    heapifyUp(){
        let currentIndex=this.data.length-1
        while(this.data[currentIndex]>this.data[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex))
            currentIndex=this.getParentIndex(currentIndex)
        }        
    }

    pop(){
        const maxValue=this.data[0]
        this.data[0]=this.data[this.data.length-1]
        this.data.length--
        this.heapifyDown()
        return maxValue
    }
    heapifyDown(){
        let currentIndex=0
        while(this.data[this.getleftChildIndex(currentIndex)]!=undefined){
            let biggestChildIndex=this.getleftChildIndex(currentIndex)
            if(this.data[this.getRightChildIndex(currentIndex)]!=undefined &&
            this.data[this.getRightChildIndex(currentIndex)]>this.data[this.getleftChildIndex(currentIndex)]
            ){
                biggestChildIndex=this.getRightChildIndex(currentIndex)

            }
            if(this.data[currentIndex]<this.data[biggestChildIndex]){
                this.swap(currentIndex,biggestChildIndex)
                currentIndex=biggestChildIndex
            }else{
                return
            }
        }
    }
}

const heap=new Heap()
console.log(heap);
heap.push(25)
heap.push(5)
heap.push(40)
heap.push(70)
heap.push(90)
heap.push(44)

console.log(heap.data.join(","));

let a=[]
for(let i=0;i<6;i++){
    a.push(heap.pop())
}
console.log(a);