package solution
func Solution(S string) string {
var occurrences [26]int;
for _, ch := range S {
occurrences [int(ch) - int('a')]++;
11
13.1
111
15
var best_char uint8 = 'a';
var best_res int
= 0;
var best_char uint8 = 'z';
var best_res int = occurrences [25);
var 1 int:
for 1 = 1; 1 < 26; i# 1
if occurrences [il >= best_res {
for 1 = 24; 1 >= 0; 1--
if occurrences [il > best_res {
best_char = uint8(int('a') +
best_res = occurrences

return string(best_char)
}