let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");

submitButton.addEventListener("click", function() {
    results.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let mood = document.querySelector(".mood").value;
    let food = document.querySelector(".food-name").value;
    let birthYear = document.querySelector(".year").value;
    let age = 2023 - birthYear; 
  
    let cityName = document.querySelector(".city").value;
    // 2. Below write your sentences! 
    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.

  results.innerHTML= "Hi my name is " + myName + ", im in a " + mood + " mood " + " i really enjoy eating " + food + " i was born in " + birthYear + " which makes me " + age + " Also im from " + cityName; 
  
});