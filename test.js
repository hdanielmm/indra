const days = [];
const inputs = [1, 0, 0, 0, 0, 1, 0, 0];
const aux = {
  0: 0,
  1: 1,
};
let outputs = [];
let prev = 0;
let next = 0;

// inputs.forEach((element, index) => {
//   if(index > 0 && index < inputs.length - 1) {
//     console.log('index: ', index);
//     if((inputs[index - 1] === 0 && inputs[index + 1] === 0) || (inputs[index - 1] === 1 && inputs[index + 1] === 1)) {
//       outputs.push(0);
//     } else {
//       outputs.push(1);
//     }
//   } else if(index === 0) {
//     inputs[index + 1] === 0 ? outputs.push(0) : outputs.push(1);
//   } else if(index === inputs.length - 1) {
//     inputs[index - 1] === 0 ? outputs.push(0) : outputs.push(1);
//   }
// });

const neighbors = (inputs, daysSequence) => {
  if(daysSequence !== 0) {
    for(let i = 0; i < daysSequence; i+=1) {
      inputs.forEach((element, index) => {
        if(index > 0 && index < inputs.length - 1) {
          if((inputs[index - 1] === 0 && inputs[index + 1] === 0) || (inputs[index - 1] === 1 && inputs[index + 1] === 1)) {
            outputs.push(0);
          } else {
            outputs.push(1);
          }
        } else if(index === 0) {
          inputs[index + 1] === 0 ? outputs.push(0) : outputs.push(1);
        } else if(index === inputs.length - 1) {
          inputs[index - 1] === 0 ? outputs.push(0) : outputs.push(1);
        }
      });
      console.table(outputs);
      inputs = [...outputs];
      ouputs = [];
      neighbors(inputs, (daysSequence - 1));
    }
  }
}
neighbors(inputs, 2);

