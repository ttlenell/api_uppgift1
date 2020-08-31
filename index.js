console.log("hej")

const jokeBtn = document.getElementById("jokeBtnRandom");
const jokeText = document.getElementById("jokeText");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

jokeBtn.addEventListener("click", () => {
    console.log("clicked the button")
    const url = "https://api.icndb.com/jokes/random";

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.value.joke)
        jokeTextRandom.innerHTML = data.value.joke;
    })
    
})

jokeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value === "" ? "Chuck": firstNameInput.value;
    
    const lastName = lastNameInput.value === "" ? "Norris": lastNameInput.value;
    
    const url = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;



    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
    
        jokeText.innerHTML = data.value.joke;
    })
    
})