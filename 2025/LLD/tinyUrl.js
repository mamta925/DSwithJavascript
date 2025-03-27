/**
 * there are x number of requiest
 * per sec getting 60 request;
 * x*60*60*24*365*10 = y for 10 years
 * charachter set for tiny url
 * 
 * 
 * a-z = 26. A-Z=62, 26 =10 = 62 char
 * Y number of unique url with 62 char combination
 * 
 * if we are taking 1 char then 62 unique url
 * if 2 then 62*62
 * if 3 then 62*62*62
 * 62^n>y
 * 
 * n>(log base 62)Y
 * 
 */