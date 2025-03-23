function stringPalindrom(str, l=0, r=str.length-1){

    if(l>=r) return true;
    if(str[l]!=str[r])  return false;
   return stringPalindrom(str,l+1, r-1)

}



console.log(stringPalindrom("abc"))
console.log(stringPalindrom("a"))
console.log(stringPalindrom(""))
console.log(stringPalindrom("aba"))
console.log(stringPalindrom("aabbaaa"))
console.log(stringPalindrom("madam"))