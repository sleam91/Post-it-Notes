let main = document.querySelector("main")
let totalCards = main.innerHTML
let textInCards = ["", "", "", "", "", "", "", "", "", "", "", ""]
let currentCardPosition = -1
let currentCard = ""
let allColors = ['red', 'green', 'blue', 'black', 'orange', 'grey', 'purple', 'lightblue', 'cyan', 'magenta', 'lightgreen', 'violet','olive','teal','plum'];
let cards = document.getElementsByClassName("card")


let rutnet = document.getElementById("rutnet")
let create = document.getElementById("create")
let trash = document.getElementById("trash")
let marker = document.getElementById("marker")
let penInPapper = document.getElementById("penInPapper")

let showCurrentCard = event => {
    main.style.gridTemplateRows = "repeat(4, 1fr)"
    main.style.gridTemplateColumns = "repeat(3, 1fr)"
    main.style.gridColumnGap = "20px"
    main.style.gridRowGap = "30px"
    create.style.display = "none"
    trash.style.display = "inline"
    let name = event.target.className.substring(5)
    let color = event.target.style.backgroundColor

    currentCardPosition = wordToNumber(name)
    currentCard = `<div class="currentCard ${numberToWord(currentCardPosition)}"><textarea>${textInCards[currentCardPosition]}</textarea></div>`

    main.innerHTML = currentCard
    main.getElementsByClassName("currentCard")[0].style.backgroundColor = color
    main.querySelector("textarea").focus()
}


function resetEventListener() {

    for (const card of cards) {
        card.addEventListener("click", showCurrentCard)


    }
}


let availableCards = ["eleven", "ten", "nine", "eight", "seven", "six", "five", "four", "three", "two", "one", "zero"]

create.addEventListener("click", event => {
    if (document.getElementsByClassName("card").length != 12 && main.getElementsByClassName("currentCard").length != 1) {


        let cardElement = document.createElement("div")

        let cardNumber = availableCards.pop()

        cardElement.setAttribute("class", "card " + cardNumber)


        main.append(cardElement)
        getNewRandomColor(cardNumber)
        totalCards = main.innerHTML

        resetEventListener()
    }
})

rutnet.addEventListener("click", event => {
    main.style.gridTemplateRows = "repeat(4, 1fr)"
    main.style.gridTemplateColumns = "repeat(3, 1fr)"
    main.style.gridColumnGap = "20px"
    main.style.gridRowGap = "30px"
    let textarea = document.querySelector("textarea")
    let text = textarea.value
    textInCards[currentCardPosition] = text
    let color = main.getElementsByClassName("currentCard")[0].style.backgroundColor
    let cardNumber = numberToWord(currentCardPosition)
    currentCardPosition = -1
    main.innerHTML = totalCards;
    main.getElementsByClassName(cardNumber)[0].style.backgroundColor = color
    create.style.display = "inline"
    trash.style.display = "none"
    resetEventListener()
})

trash.addEventListener("click", event => {
    let deleteCard = document.getElementsByClassName(numberToWord(currentCardPosition));

    textInCards[currentCardPosition] = ""
    availableCards.push(numberToWord(currentCardPosition))
    currentCardPosition = -1
    main.innerHTML = totalCards;
    deleteCard[0].remove()
    totalCards = main.innerHTML;
    create.style.display = "inline"
    trash.style.display = "none"
    resetEventListener()
})

marker.addEventListener("click", event => {
    getNewRandomColor(numberToWord(currentCardPosition))
    main.querySelector("textarea").focus()
})


penInPapper.addEventListener("click", event => {


    main.style.gridTemplateRows = "repeat(12, 1fr)"
    main.style.gridTemplateColumns = "1fr"
    main.style.gridColumnGap = "0"
    main.style.gridRowGap = "12px"

    if (trash.style.display === "inline") {
        let textarea = document.querySelector("textarea")
        let text = textarea.value
        textInCards[currentCardPosition] = text
        let color = main.getElementsByClassName("currentCard")[0].style.backgroundColor
        let cardNumber = numberToWord(currentCardPosition)
        currentCardPosition = -1
        main.innerHTML = totalCards;
        main.getElementsByClassName(cardNumber)[0].style.backgroundColor = color
        create.style.display = "inline"
        trash.style.display = "none"
        resetEventListener()
    }
 
})

function numberToWord(number) {
    switch (number) {
        case 0:
            return "zero"
        case 1:
            return "one"
        case 2:
            return "two"
        case 3:
            return "three"
        case 4:
            return "four"
        case 5:
            return "five"
        case 6:
            return "six"
        case 7:
            return "seven"
        case 8:
            return "eight"
        case 9:
            return "nine"
        case 10:
            return "ten"
        case 11:
            return "eleven"


        default:
            return;
    }
}
function wordToNumber(word) {
    switch (word) {
        case "zero":
            return 0
        case "one":
            return 1
        case "two":
            return 2
        case "three":
            return 3
        case "four":
            return 4
        case "five":
            return 5
        case "six":
            return 6
        case "seven":
            return 7
        case "eight":
            return 8
        case "nine":
            return 9
        case "ten":
            return 10
        case "eleven":
            return 11
        default:
            return;
    }
}

function getNewRandomColor(name) {
    let rand = allColors[Math.floor(Math.random() * allColors.length)];
    document.getElementsByClassName(name)[0].style.backgroundColor = rand;
}