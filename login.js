let logIn = document.getElementById('login-btn')


logIn.addEventListener('click',function(event){
   event.preventDefault()
   let pin = moneyGetId('pin')
   let number = moneyGetId('phone-number')
    if(pin === 1234){
        window.location.href = "home.html"
    }else{
        alert("wrong")
    }
})
