
let favoriteArray = Array.from(document.querySelectorAll(".fa-heart"))

favoriteArray.map(el => el.addEventListener("click", function () {

    el.classList.toggle("red")

}

))


let removeItem = Array.from(document.querySelectorAll(".fa-times-circle"))

removeItem.map(el => el.addEventListener("click", function () {
    el.parentElement.parentElement.remove()

}))


let numberOfItems = Array.from(document.querySelectorAll(".plusbutton"))
numberOfItems.map(el => el.addEventListener("click", function () {

    el.nextElementSibling.innerHTML = Number(el.nextElementSibling.innerHTML) + 1

    document.querySelector(".totalPriceCard").innerHTML = sum()

}))


let less = Array.from(document.querySelectorAll(".less"))
less.map(el => el.addEventListener("click", function () {
    if (Number(el.previousElementSibling.innerHTML) > 0) { el.previousElementSibling.innerHTML = Number(el.previousElementSibling.innerHTML) - 1 }

    document.querySelector(".totalPriceCard").innerHTML = sum()
}))



function sum() {
    let price = Array.from(document.querySelectorAll(".total-price"))
    let amount = Array.from(document.querySelectorAll(".totalnumber"))
    let add = 0
    for (let i = 0; i < amount.length; i++) {
        add += price[i].innerHTML * amount[i].innerHTML
    }
    return add
}


