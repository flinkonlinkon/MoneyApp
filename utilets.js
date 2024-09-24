function moneyGetId(id){
    let money = document.getElementById(id).value
    let newMoney = parseFloat(money)
    return newMoney;
}
function btnAll(id){
let btn = document.getElementById(id)
return btn;
}
function hideAndShow(id){
    document.getElementById('add-money-sectaion').classList.add('hidden')
    document.getElementById('cash-out-section').classList.add('hidden')
    document.getElementById('send-money-sectaion').classList.add('hidden')
    document.getElementById('pay-bill-sectaion').classList.add('hidden')
    document.getElementById('his').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')

}