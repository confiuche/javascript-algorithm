//Write a program that will display only vowels from any given string

function vowelSound(word){
    let vow = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U']

   // newWord = word.split('');
    //console.log(newWord);

    vowels = [];
    display = {
        vowels : vowels
    }
     for(let i = 0; i<word.length; i++){
      let any = word[i];
       
        //let aa = any.split("")
        //console.log(any)
        if(vow.includes(any)){
            display.vowels.push(any)
        }
   }
    return display;
    
    
}

console.log(vowelSound("hello"));



var rev = 'I LOVE JESUS';
var revWord = rev.split('').reverse().join('');
console.log(revWord);