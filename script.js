(() =>{

    const buttons = document.querySelectorAll(".btn"); 
    
    let optionText = ""; 

    buttons.forEach( function (btn) {        
        
        btn.addEventListener("click", function(){

            for (const btn of buttons) {
                btn.classList.remove("choose");
                btn.classList.add("btn");
            }

            this.classList.toggle("choose");
            this.classList.toggle("btn");

            optionText = this.innerText;
            getTextOption(optionText); 
        })
          
    });

    const submitID = document.getElementById("submitID");
    const ratingBox = document.getElementById("ratingBox");
    const thanksBox = document.getElementById("thanksBox");

    submitID.addEventListener("click", () => {
        if(optionText !== ""){
            ratingBox.style.display = "none";
            thanksBox.style.display = "block"; 
        }else{
            alert("Choose Your Rating Please!"); 
        }
    });

    function getTextOption(optionText){
        const selectedRatBox = document.getElementById("selectedRatBox");
        selectedRatBox.innerHTML = `You selected ${optionText} out of 5`;
    }

})();