function changeTheme() {
        let body = document.querySelector("body");

        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
        } else {
            body.classList.add("dark")
        }
      }

      let themeButton = document.querySelector("button");

      themeButton.addEventListener("click", changeTheme);
      

           function newButton() {
           let name = prompt("what is your name?");
           let coding = prompt("Do you want to learn coding?");
        
           alert(name + ", Congratutions you are in the right place");
           }
           let startButton = document.querySelector(".start-Button");
           startButton.addEventListener("click", newButton);