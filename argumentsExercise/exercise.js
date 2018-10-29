Function.prototype.myApply = function (ctx, numArgs) {
  // debugger
  return this.call(ctx, ...numArgs);
};

Function.prototype.myCall = function (ctx) {
  // debugger
  return this.apply(ctx, Array.from(arguments).slice(1));
};
const newfunc = function (){
  console.log(arguments);
  // debugger
  return undefined
};

function sum(...args){
  let sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
// args.forEach(el => sum+=el;)
}
// console.log("hello world");
// console.log(sum(3,5,6,1));

 Function.prototype.myBind = function (ctx, ...callArg) {
   // const callArg = Array.from(callArg);
   // debugger
  return () => {
    return this.myApply(ctx, callArg);
  };
};

Function.prototype.myBindR = function (ctx, ...bindArgs){
 return (...callArg) => {
   return this.apply(ctx, bindArgs.concat(callArg));
 };
};

// console.log();
//
//
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");
console.log(markov.says("meow", "Ned"));
console.log(markov.says.myBind(pavlov, "meow", "Kush")());
                                // bind time args     //call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// console.log(markov.says.myBindR(pavlov, "meow")("Markov"));
//


function curriedSum (numArgs) {
  let numbers = [];
  const cb = function (total, num) {
    return total + num;
  };

  const _curriedSum = function (number) {
    numbers.push(number);
    // debugger
    console.log(numbers.reduce(cb, 0));
    if (numArgs === numbers.length){
      return numbers.reduce(cb);
    } else {
      return _curriedSum;
    }
  };
  // debugger
  return _curriedSum;
}


// const sumes = curriedSum(4);
// console.log(sumes(5)(30)(20)(1)); // => 56


Function.prototype.curry = function (numArgs){
  const args = [];
  const _curriedFunction  = (arg)=>{
    args.push(arg);
    if (args.length === numArgs){
      return this(...args);
    }else{
      return _curriedFunction;
    }
  };
  return _curriedFunction;
};
//
// const a = sum.curry(4);
// console.log(a(3));
// console.log(a(2));
// console.log(a(4));
// console.log(a(5));
