function printWord(str, s) {
    for (var i = 0; i < str.length; i++) {
        if (s.indexOf(str[i]) < 0) {
            return;
        }
    }
  console.log(str)
}
 
// Function to find the words
function findWord(str1, str2) {
    var s = "";
    for (var i in str2) {
        s += str2[i];
    }
    for (var i = 0; i < str1.length; i++) {
        printWord(str1[i], s);
    }
}
 
var str1 = ["go", "bat", "me", "eat",
            "goal", "boy", "run"];
var str2 = ["e", "o", "b", "a", "m", "g", "l"];
findWord(str1, str2);