function rot13(str) {
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let newstr = [];

let str2 = [];
for(let i=0; i < str.length;i++) {
  if(abc.indexOf(str[i])>=0) {newstr.push(abc.indexOf(str[i])-13)} else {newstr.push(str[i])}
}
let newstr2 = newstr.map(n=>{if (n<0){return n+26}else{return n}})  
   
  for(let j=0;j <newstr.length;j++) {
    if(newstr2[j]>=0){str2.push(abc[newstr2[j]])}else{str2.push(newstr2[j])}
  }
  return str2.map(un => {if(un==undefined){return " "}else{return un}}).join('')
}
