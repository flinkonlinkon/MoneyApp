let btnAddMoney = document.getElementById('add-money-btn')
let cashOut = document.getElementById('cash-out-btn')
let sendMoney = document.getElementById('send-money-btn')
let payBill = document.getElementById('bill-btn')
let history = document.getElementById('history')
history.addEventListener('click',function(){
    hideAndShow('history-all')
})
history.addEventListener('click',function(){
    hideAndShow('his')
})
document.getElementById('add-money').addEventListener('click',function(){
    hideAndShow('add-money-sectaion')
})
document.getElementById('cash-out').addEventListener('click',function(){
    hideAndShow('cash-out-section')
})
document.getElementById('send-money').addEventListener('click',function(){
    hideAndShow('send-money-sectaion')
})
document.getElementById('pay-bill').addEventListener('click',function(){
    hideAndShow('pay-bill-sectaion')
})

document.querySelector('#modal-c-btn').addEventListener('click', function() {
    document.getElementById('my_modal_1').close();
  });
  

btnAddMoney.addEventListener('click',function(e){
    
    console.log("hello");
    
    e.preventDefault()
     let bankMoney = moneyGetId('bank-money')
     let bankNumber = moneyGetId('bank-number')
     let Mm = document.getElementById('main-money').innerText
     let banks = document.getElementById('banks-select').value
     if(isNaN(bankMoney)){
        alert("something is worng")
        return;
     } else if (bankMoney <=0 || bankMoney >= Mm){
        alert("something is worng")
        return;
     } else{
     
     console.log(banks);
     

     let mainMoney = parseFloat(Mm)
     let sum = mainMoney + bankMoney
     let p = document.createElement('p')
     p.innerHTML = `<p class="text-xl font-bold p-2 border-solid border-2 border-gray-100 rounded-lg w-4/5 mx-auto">Add Money: ${bankMoney}<br> From Bank:  ${banks}<br>Transaction Id: ${bankNumber} <br>Current Balance: ${sum}<br>Date: ${new Date().toDateString()} </p>`
    document.getElementById('his').appendChild(p);
    document.getElementById('main-money').innerHTML = `${sum}`
    
    btnAll('bank-money').value = ''
   btnAll('bank-number').value = ''
     
     }

    })

cashOut.addEventListener('click',function(e){
    
    e.preventDefault()
    

    
    let bankMoney = moneyGetId('bank-money-c')
    let bankNumber = moneyGetId('bank-number-c')
    let Mm = document.getElementById('main-money').innerText
    let banks = document.getElementById('c-banks').value
    if(isNaN(bankMoney)){
        alert("something is worng")
        return;
     } else if (bankMoney <=0 || bankMoney >= Mm){
        alert("something is worng")
        return;
     } else{
    
    console.log(banks);
    

    let mainMoney = parseFloat(Mm)
    let sum = mainMoney - bankMoney
    let p = document.createElement('p')
    p.innerHTML = `<p class="mt-3 text-xl font-bold p-2 border-solid border-2 border-gray-100 rounded-lg w-4/5 mx-auto">Cash Out: ${bankMoney}<br> From Bank:  ${banks}<br>Transaction Id: ${bankNumber} <br>Current Balance: ${sum}<br>Date: ${new Date().toDateString()} </p>`
   document.getElementById('his').appendChild(p);
   document.getElementById('main-money').innerHTML = `${sum}`
    btnAll('bank-money-c').value = ''
   btnAll('bank-number-c').value = ''
     }

    })
sendMoney.addEventListener('click',function(e){
    
    e.preventDefault()
    

    
    let bankMoney = moneyGetId('phone-money-s')
    let bankNumber = moneyGetId('phone-number-s')
    let Mm = document.getElementById('main-money').innerText
    if(isNaN(bankMoney)){
        alert("something is worng")
        return;
     } else if (bankMoney <=0 || bankMoney >= Mm){
        alert("something is worng")
        return;
     } else{
    
    

    let mainMoney = parseFloat(Mm)
    let sum = mainMoney - bankMoney
    let p = document.createElement('p')
    p.innerHTML = `<p class="mt-3 text-xl font-bold p-2 border-solid border-2 border-gray-100 rounded-lg w-4/5 mx-auto">Send Money: ${bankMoney}<br>Phone Id: 0${bankNumber} <br>Current Balance: ${sum}<br>Date: ${new Date().toDateString()} </p>`
   document.getElementById('his').appendChild(p);
   document.getElementById('main-money').innerHTML = `${sum}`
    btnAll('phone-money-s').value = ''
   btnAll('phone-number-s').value = ''
     }

    })
payBill.addEventListener('click',function(e){
    
    e.preventDefault()
    

    
    let bankMoney = moneyGetId('bill-money')
    let bankNumber = moneyGetId('bill-number')
    let Mm = document.getElementById('main-money').innerText
    let banks = document.getElementById('bill-ids').value
  
    if(isNaN(bankMoney)){
        alert("something is worng")
        return;
     } else if (bankMoney <=0 || bankMoney >= Mm){
        alert("something is worng")
        return;
     } else{
    

    let mainMoney = parseFloat(Mm)
    
    let teaxs = bankMoney * 0.05
    let newSum = teaxs + bankMoney
    let sum = mainMoney - newSum 
    console.log(sum);
    
   
    let p = document.createElement('p')
    p.innerHTML = `<p class="mt-3 text-xl font-bold p-2 border-solid border-2 border-gray-100 rounded-lg w-4/5 mx-auto">Pay Bill: ${newSum}<br>Bill Id: ${bankNumber}<br>Bill Pay to: ${banks}<br>Tax: ${teaxs} <br>Current Balance: ${sum}<br>Date: ${new Date().toDateString()} </p>`
   document.getElementById('his').appendChild(p);
   document.getElementById('main-money').innerHTML = `${sum}`
   btnAll('bill-money').value = ''
   btnAll('bill-number').value = ''
   
     }

    })

    

