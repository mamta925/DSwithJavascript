/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var dirs = [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, -1], [-1, 1]]
var gameOfLife = function(board) {
    //live->dead = 3
    //dead -> live = -1 
    //TC: O(N)
    //SC: O(1)
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            var neighbors = 0
            for(var [x, y] of dirs) {
                var cell = board[i+x] ? board[i+x][j+y] : 0
                if(cell == 1 || cell == 3) neighbors++
            }
            if(board[i][j] == 0 || board[i][j] == 3) {
                if(neighbors == 3) board[i][j] = -1
            } else {
                if(neighbors < 2 || neighbors > 3) board[i][j] = 3
            }
        }
    }
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            if(board[i][j] == 3) board[i][j] = 0
            if(board[i][j] == -1) board[i][j] = 1
        }
    }
};




var minKnightMoves = function(x, y) {
    [x, y] = [Math.abs(x), Math.abs(y)]; 
    if (x < y) [x, y] = [y, x];  
  
    if (x === 1 && y === 0) return 3
    if (x === 2 && y === 2) return 4
  
    let m = Math.round(Math.max(x / 2, ( x + y ) / 3))
    return m + ((m + x + y) % 2)
  };

  var minKnightMoves = function(tx, ty) {
    var dirs = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
    
    let steps = 0;
    let seen = new Set();
    let queue = [[0, 0]];
  
    while (queue.length) {
      let len = queue.length;
      
      for (let i = 0; i < len; i++) {
        let [x, y] = queue.shift(); // hey look, we're doing it --> .shift()
        
        if (x === tx && y === ty) return steps; //current coords match target
        
        for (let [dx, dy] of dirs) {
          let [nx, ny] = [x + dx, y + dy];
          if (!seen.has(nx + ',' + ny)) {
            queue.push([nx, ny]);
            seen.add(nx + ',' + ny);
          }
        }
      }
      steps++;
    }
  };


  const lengthOfLIS = (nums) => {
	let dp = new Array(nums.length).fill(1);
	let longest = 1;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j]+1);
				longest = Math.max(longest, dp[i]);
			}
		}
	}
	return longest;
}

import { Document } from '@nestjs/mongoose';
const { Schema, Prop, SchemaFactory } = "@nestjs/mongoose"

@Schema ({_id: false, timestamps: false })

export class ContactInfo {
    @Prop({ type: String, required: false, default: null, unique: true })
    value?: string;
    @Prop({ required: false, default: false }) 
    isVerified?: boolean;
}

@Schema ({_id: true, timestamps: true })
export class User extends Document {

@Prop({ type: String, required: true }) 
   firstName: string;

@Prop({ type: String, required: true }) 
 lastName: string;

@Prop({ type: ContactInfo, default: () => new ContactInfo () }) 
phoneNumber: ContactInfo;

@Prop ({ type: ContactInfo, default: () => new ContactInfo() }) 
email: ContactInfo;
}
export const UserSchema = SchemaFactory. createForClass(User);