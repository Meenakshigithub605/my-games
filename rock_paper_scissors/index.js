//Get to DOM element
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user-result img"),
    cpuResult = document.querySelector(".cpu-result img")
result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src=cpuResult.src="img/ock.png";
        result.textContent="Wait...";
        
        // Loop through each option image again 
        optionImages.forEach((image2, index2) => {
            //if the current index does'nt match the clicked index remove the active class from other option images
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        //Set the timeOut to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            //Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;

            //Set the user image to the clicked option image
            userResult.src = imageSrc;

            //Generate a random number between 0 and 2
            let randomNum = Math.floor(Math.random() * 3);
            console.log(randomNum);

            //Create an array of CPU Option images
            let cpuImages = ["img/ock.png", "img/paper.png", "img/scissor.png"];

            //Set the CPU image to the clicked option image
            cpuResult.src = cpuImages[randomNum];

            //Assign a letter value to the CPU option (R for rock ,P for Paper, S for Scissors.
            let cpuValue = ["R", "P", "S"][randomNum];

            //Assign a letter value to the clicked option(based on index)
            let userValue = ["R", "P", "S"][index];

            //Create an object with all possible Outcomes
            let outcomes = {
                RR: "Draw",
                RP: "CPU",
                RS: "User",
                PR: "User",
                PP: "Draw",
                PS: "CPU",
                SR: "CPU",
                SP: "User",
                SS: "Draw",
            };

            //Look up th outcome value based on user and cpu options
            let outcomeVal = outcomes[userValue + cpuValue];

            //Display the result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeVal} Won !!`;
            console.log(outcomeVal);
        }, 2500);

    });
});