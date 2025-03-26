function maxEvents(arrival, duration) {
    let counter = 0;
    console.log(arrival, duration)
    for(let i = 0; i< arrival.length; i++){
        for(let j = 0; j< arrival.length-1; j++) {
            if(arrival[j]>= arrival[j+1]){
                [arrival[j], arrival[j+1]] = [arrival[j+1], arrival[j]];
                [duration[j], duration[j+1]] = [duration[j+1], duration[j]];
            }
        }
    }
    for(let i = 0; i< arrival.length; i++){
        for(let j = 0; j< arrival.length-1; j++) {
            if(arrival[j]== arrival[j+1] && duration[j]> duration[j+1]){
                [duration[j], duration[j+1]] = [duration[j+1], duration[j]];
            }
        }
    }
    let change = true;
    let tempDuration;
    for (let i = 1; i <= arrival.length; i++) {
        if(change){
         tempDuration = (arrival[i - 1] + duration[i - 1])-1;
         counter++
        }
        
        if (tempDuration <= arrival[i]) {
            change = true;
        } else {
            change = false 
        }
    }

    return counter;
}
 maxEvents([
    978, 409, 229, 934, 299,
    982, 636,  14, 866, 815,
     64, 537, 426, 670, 116,
     95, 630
  ], [
    502, 518, 196, 106, 405,
    452, 299, 189, 124, 506,
    883, 753, 567, 717, 338,
    439, 145
  ])
  //maxEvents([ 1, 1, 1, 1, 4 ], [ 10, 3, 6, 4, 2 ])