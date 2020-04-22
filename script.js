let main = document.querySelector("main")
let totalCards = main.innerHTML
let fullCards = '<div class="card"></div><div class="card"></div><div class="card"></div><div class="card"></div><div class="card"></div><div class="card"></div><div class="card"></div><div class="card"></div><div class="card"></div><div class="card"></div><div class="card"></div><div class="card"></div>'

let currentCard = '<div class="currentCard"><textarea></textarea></div>'
let textInCards =[]
let cards = document.getElementsByClassName("card")
let showCurrentCard = event => main.innerHTML = currentCard

let rutnet = document.getElementById("rutnet")
let create = document.getElementById("create")



function resetEventListener() {
    for (const card of cards) {
        card.addEventListener("click", showCurrentCard)
    }
}


create.addEventListener("click", event => {
    if (document.getElementsByClassName("card").length != 12 && main.getElementsByClassName("currentCard").length != 1) {
        console.log( main.getElementsByClassName("currentCard").length)

        let cardElement = document.createElement("div")
        cardElement.setAttribute("class", "card")
        main.append(cardElement)
        totalCards = main.innerHTML

        resetEventListener()
    }
})

rutnet.addEventListener("click", event => {

    main.innerHTML = totalCards;
    resetEventListener()
})


