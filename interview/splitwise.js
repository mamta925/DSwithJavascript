// - Support adding users to the system, repeated users not allowed  // email



// - User can create an expense - Share the expense between other users,  
// equal



// -Send notification when a expense is added to all shared users with their share amount


let Users = {};
let Expenses = {};

class User {
     constructor({id, name, email, phone}){
         this.id = id;
         this.name = name;
         this.email = email;
         this.phone = phone;
         this.expenseIds = [];
     }
     createExpense(expense){
        Expenses[expense.id] = new Expense(expense)
        for(let email of expense.sharedWith){
             Users[email].expenseIds = expense.id;
             let notification = new Notification();
             notification.sendNotification(expense)
        }
        this.expenseIds.push(expense.id);

    }

    getBalance(){
        let owe = 0;
        let borrow = 0;

        for(let expenseId in this.expenseIds) {
                let expense = Expenses[expenseId];
                if(expense.paidBy == this.email){
                    owe  = owe + ((expense.amount/expense.sharedWith.length) * expense.sharedWith.length-1)
                } else {
                    borrow = borrow+(expense.amount/(expense.sharedWith.length+1))
                }


        }
        return {owe, borrow}
    }


}

class Expense{
    constructor({id, amount, paidBy, sharedWith}){
        this.id =  id;
        this.amount = amount;
        this.paidBy = paidBy;
        this.sharedWith = sharedWith
    }
    
}

class SplitWise {


    isUserExists(email){
        return !!Users[email]
    }
    getUser(email) {      
        return Users[email]
          
     }

    addUser(userInfo){

        if(this.isUserExists(userInfo.email)){
            return "User already exists";
        }
       let user = new User(userInfo)
       Users[userInfo.email] = user
       console.log(Users)
    }
    createExpense(expense, email){
        let user = Users[email];
        user.createExpense(expense)
    }
    getBalance(email){
        let user = Users[email];
       console.log( user.getBalance())
    }


}

class Notification {

    sendNotification(expense) {
        for(let email of expense.sharedWith){
            let  borrow = expense.amount/(expense.sharedWith.length+1);
            console.log(`${email} owe ${expense.paidBy}  R  ${borrow}  `)
       }
    }
}

let splitWise = new SplitWise();
splitWise.addUser({id: 1, name: "mamta", email: "mamta@gmail.com", phone: "1233445"})
splitWise.addUser({id: 2, name: "Neha", email: "neh@gmail.com", phone: "2233445"})
splitWise.createExpense({id: "1", amount: "50", paidBy: "mamta@gmail.com", sharedWith: ['neh@gmail.com']}, "mamta@gmail.com")