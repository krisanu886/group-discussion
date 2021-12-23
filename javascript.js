// Iterator discussion

// creating Array------
const myArray=["Sidharth","Poonam","Manjari","Kanhaiya"];

//1. simple --Symbol.iterator()-- method use-----
let name = myArray[Symbol.iterator]();
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());

// 2. for of loop & using Symbol.iteratormethod(Iterate Through Iterables)------
for(items of myArray[Symbol.iterator]()){
    document.write(items);
}

// 3. simple for of loop 
for(items of myArray){
    document.write(items);
}

//4. creating function-------
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

const name = nameIterator(myArray);

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);




