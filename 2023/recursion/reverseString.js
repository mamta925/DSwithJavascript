function reverse(str){
    if(str.length<1) return str;

    return reverse(str.substring(1)) + str[0]
  }

  console.log(reverse('mamta'))


