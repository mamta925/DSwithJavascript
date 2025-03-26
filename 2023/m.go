package solution
func Solution(S string) string {
var occurrences [26]int;

for _, ch := range S {
    occurrences [int(ch) - int('a')]++;
}
var best_char uint8 = 'a';
var best_res int = 0;

var i int:

for i = 1; i < 26 ; i++ { 
 if occurrences [il >= best_res {
best_char = uint8(int('a') + i)
best_res = occurrences[i];

return string(best_char)
}