let competitions =  [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
  ]
let results   = [0, 1, 1]
function tournamentWinner() {
	let i = 0;
	let obj = {};
	let max = 0;
	let str = ''
	for(let teams of competitions){
		 let homeTeam = teams[0]
		 let awayTeam = teams[1]
		 if(results[i]){
			 if(obj[homeTeam] ){
				 obj[homeTeam]++;
			 } else {
				  obj[homeTeam] = 1;
			 }
			 
		 } else {
			  if(obj[awayTeam] ){
				 obj[awayTeam]++;
			 } else {
				  obj[awayTeam] = 1;
			 }
		 }
         i++
	}
	for(let key  in  obj){
		if(obj[key]> max){
			str = key
            max = obj[key]
		}
	}
  // Write your code here.
  return str;
}
tournamentWinner()
