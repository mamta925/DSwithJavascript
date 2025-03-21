// const person = {
//     name: "Mamta",
//     greet: function () {
//       console.log(this.name); //Mamta
//     }
//   };
  
//   person.greet();

//   const persons = {
//     name: "Mamta",
//     greet: () => {
//       console.log(this.name);
//     }
//   };
  
//   persons.greet(); // undefined

//   function Timer() {
//     this.seconds = 0;
  
//     setInterval(function () {
//       this.seconds++;
//       console.log(this.seconds); // NaN or undefined
//     }, 1000);
//   }
//   new Timer();

    const persons = {
    seconds:0,
    timer: () => {
        let seconds = 0;
        setInterval(function () {
            this.seconds++;
            console.log(this.seconds); // NaN or undefined
          }, 1000);
    }
  };
  
  persons.timer();