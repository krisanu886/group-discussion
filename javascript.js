// Iterator discussion


function nameIterator(values){
    let nameIndex = 0;
    return{
        next:function(){
            if(nameIndex < values.length){
                return{
                    value:values[nameIndex++],
                    done:false
                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
}
const myArray=["Sidharth","Poonam","Manjari","Kanhaiya"];
console.log(myArray);

const name = nameIterator(myArray);

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

for(items of myArray){
    document.write(items);
}


