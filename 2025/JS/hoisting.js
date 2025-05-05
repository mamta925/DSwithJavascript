let greeting = "Hello";    // GlobalEnv

function outer(name) {     // creates OuterEnv → outer’s outer is GlobalEnv
  let punctuation = "!";

  if (name) {              // creates BlockEnv → its outer is OuterEnv
    let excited = true;
    function inner() {     // creates InnerEnv on call → outer is BlockEnv

      console.log(
        greeting,
        name + (excited ? punctuation.repeat(3) : punctuation)
      );
    }

    inner();
  }
}
[].map()

outer("Alice");  // logs: Hello Alice!!!
