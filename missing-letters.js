function fearNotLetter(str) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  if (str[0] === "a") {
    for(let i = 0; i < str.length; i++) {
    if(str.indexOf(abc[i]) == -1) {
      return abc[i]
      }
    }
  } else {
      let n = abc.indexOf(str[0]);
      let newAbc = abc.split('').splice(n).join('')
       for(let i = 0; i < str.length; i++) {
      if(str.indexOf(newAbc[i]) == -1) {
      return newAbc[i] 
      }
    }
  }
}
