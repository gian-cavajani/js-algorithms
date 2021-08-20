function palindrome(str) {
  let shifted = [];
  let newstr = str.replace(/\W|_/g,"").toLowerCase().split(''); 
  for(let i=0; i < newstr.length; i++) {
    shifted.unshift(newstr[i]);
  }
  return (shifted.join('') === newstr.join('')) 
}
