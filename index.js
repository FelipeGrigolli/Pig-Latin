function warning(){
  alert ('well done')
}
const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const vowels = ['e', 'i', 'a', 'o', 'u'];
const ending = 'ay'

textInput.addEventListener('keyup', (e) => {
  const input = e.target.value;
  console.log(input);
  const words = input.split(' ');
 const output = words.map(word => convertToPigLatin(word)).join(' ')
  textOutput.innerText = output;


});

const convertToPigLatin = (input) => {
  if(vowels.includes(input[0])){
    output = input + ending;
  }
  else {
    let consonants = '';
    for(let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        break;
      }

      consonants += input[i];
    }

    output = input.substring(consonants.length) + consonants + ending;
  }



return output;

}
