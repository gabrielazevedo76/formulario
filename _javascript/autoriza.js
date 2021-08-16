const ageNo = document.querySelector("#age__no")

ageNo.addEventListener("click", (e) => {
    e.preventDefault()

    alert("Apenas clientes maiores de 18 anos poderão participar das promoções!")
})