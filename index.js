// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    return str.split(',').length
    //return the count of numbers in data
  }
  printNumbers() {
    //print the numbers in data
    const numbers = str.split(",")
    console.log(numbers)
  }
  odds() {
    const output = [];
    let i =0;
    for (i=0; i<this.data.length; i++)
    { 
       if (this.data[i]%2===1)
       output[i]=this.data[i];
    }
    return output

    //return the odd numbers in data

  }
  evens() {
    const output = [];
    let i =0;
    for (i=0; i<this.data.length; i++)
    { 
       if (this.data[i]%2===0)
       output[i]=this.data[i];
    }
    return output
    //return the even numbers in data
  }
  sum() {   let output=0;
    let i =0;
    for (i=0; i<this.data.length; i++)
    { 
       output=this.data[i]+output;
    }
    return output

    //return the sum of the numbers
  }
  product() { 
     let output=1;
    let i =0;
    for (i=0; i<this.data.length; i++)
    { 
       output=this.data[i]*output;
    }
    return output

    //return the product of the numbers
  }
  greaterThan(target) {
    let output=[];
    let i =0;
    for (i=0; i<this.data.length; i++)
    { 
      if(this.data[i]>target)
       output[i]=this.data[i];
    }
    return output

    //return the numbers greater than the target
  }
  howMany(target) {
    let output=0;
    let i =0;
    for (i=0; i<this.data.length; i++)
    { 
      if(this.data[i]===target)
       output=output+1;
    }
    return output
    //return the count of a given number
  }
}

//Prompt the user for a list of integers separated by commas
//const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
str=("1,2,3,4,5,6,7")
//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number