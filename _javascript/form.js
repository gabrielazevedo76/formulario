const names = document.querySelector("#name")
const nickname = document.querySelector("#nickname")
const day = document.querySelector("#day")
const month = document.querySelector("#month")
const year = document.querySelector("#year")
const cpf = document.querySelector("#cpf")
const sports = document.querySelectorAll("[name='sport']")
const submit = document.querySelector("#submit")
const input = document.querySelectorAll("input")

let validate, validateName, validadeNick, validadeDay, validadeMonth, validadeYear, validadeCpf, validadeCheck = false;

let obj = []

submit.addEventListener("click", (e) => {
    e.preventDefault()
    returnJson()
    validation()
})

function returnJson() {
    let sportId = []

    sports.forEach(ids => {
        if(ids.checked) {
            sportId.push(ids.getAttribute("id"))
        }
    })

    obj.push(JSON.parse(
        `{"name":"${names.value}",
        "nickname":"${nickname.value}",
        "birth-date":"${day.value}-${month.value}-${year.value}",
        "cpf":"${cpf.value.slice(0, 3)}.${cpf.value.slice(3, 6)}.${cpf.value.slice(6, 9)}-${cpf.value.slice(9, 11)} ",
        "sport":"${sportId}"}`
    ))

    for (let i = 0; i < obj.length; i++) {
        console.log(obj[i])
    }
}

function validation() {
    
    if (names.value.length <= 10) {
        names.style.border = "1px solid red"
        validateName = false
    }else {
        names.style.border = "1px solid green"
        validateName = true
    }

    if (nickname.value.length <= 2) {
        nickname.style.border = "1px solid red"
        validadeNick = false
    }else {
        nickname.style.border = "1px solid green"
        validadeNick = true
    }

    if (day.value >= 1 && day.value <= 31) {
        day.style.border = "1px solid green"
        validadeDay = true
    }else {
        day.style.border = "1px solid red"
        validadeDay = false
    }

    if (month.value >= 1 && month.value <= 31) {
        month.style.border = "1px solid green"
        validadeMonth = true
    }else {
        month.style.border = "1px solid red"
        validadeMonth = false
    }

    if (year.value >= 1900 && year.value <= 2021) {
        year.style.border = "1px solid green"
        validadeYear = true
    }else {
        year.style.border = "1px solid red"
        validadeYear = false
    }

    if(cpf.value < 14) {
        cpf.style.border = "1px solid red"
        validadeCpf = false
    }else {
        cpf.style.border = "1px solid green"
        validadeCpf = true
    }

    sports.forEach(ids => {
        if(ids.checked) {
            ids.style.border = "1px solid green"
            validadeCheck = true
        }else {
            ids.style.border = "1px solid red"
            validadeCheck = false
        }
    })


    for (let i = 0; i < sports.length; i++) {
        if (sports[i].checked) {
            validadeCheck = true
            console.log(sports[i].checked)
            break
        }else{
            console.log(sports[i].checked)
            validadeCheck = false
        }
    }

    if (validateName && validadeNick && validadeDay && validadeMonth && validadeYear && validadeCpf && validadeCheck) {
        validate = true
    }else {
        alert("Preencha todos os campos!")
    }
}