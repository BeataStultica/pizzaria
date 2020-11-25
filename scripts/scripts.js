'use strict'

function  cicle(){
      let marg = Number(document.getElementsByClassName("slides")[0].style.marginLeft.slice(0,4))
      if (isNaN(marg)){
        marg = 0
      }
      document.getElementsByClassName("slides")[0].style.marginLeft = String(marg -100)+'%';
      if (document.getElementsByClassName("slides")[0].style.marginLeft == "-500%"){
        document.getElementsByClassName("slides")[0].style.marginLeft = "0%"
      }
  }
let timer


function next(){
    let marg = Number(document.getElementsByClassName("slides")[0].style.marginLeft.slice(0,4))
    if (marg >-400){
    clearInterval(timer)
    document.getElementsByClassName("slides")[0].style.marginLeft = String(marg -100)+'%';
    timer = setInterval(cicle, 5000)
    }
  }
function prev(){
    let marg = Number(document.getElementsByClassName("slides")[0].style.marginLeft.slice(0,4))
    if (marg <0){
    clearInterval(timer)
  
    document.getElementsByClassName("slides")[0].style.marginLeft= String(marg +100)+'%';
    timer = setInterval(cicle, 5000)
    }
  }
function count_of_piza(){
    let temp = JSON.parse(localStorage.getItem('cart'))
    if (temp == undefined){
      temp = {}
    }
    let amount = 0
    for (let item in temp){
        amount += temp[item]
      }
    document.getElementById("ItemNumb").textContent =amount
}
count_of_piza()
function addLocalStorage(value, detail = false){
    let count
    if (detail){
      count = document.getElementById(value).pizza_count.value
    }
    else{
      count = 1
    }
    let temp = JSON.parse(localStorage.getItem('cart'))
    if (temp == undefined){
      temp = {}
    }
    if (count>0){
      if (temp[value] == undefined){
        temp[value] =Number(count)
      }
      else{
        temp[value] = Number(temp[value]) +Number(count)
      }
      let amount = 0
      for (let item in temp){
        amount += temp[item]
      }
      document.getElementById("ItemNumb").textContent =amount
      localStorage.setItem("cart", JSON.stringify(temp))
    }
}

function removeLocalStorage(id){
  let temp = JSON.parse(localStorage.getItem('cart'))
  delete temp[id]
  document.getElementById(id).remove()
  localStorage.setItem("cart", JSON.stringify(temp))
  count_of_piza()
}

async function sendPOST(){
  let form = document.getElementById('order')
  if (form.checkValidity() === false){
    form.classList.add('was-validated');
  }
  else if (JSON.parse(localStorage.getItem('cart')) == undefined){
    alert("Ваша корзина пуста!")
  }
  else{
    let data = {
      "name":form.name.value,
      "lastname": form.lastName.value,
      "email": form.email.value,
      "address": form.adres.value,
      "tel": form.phone.value,
      "time": form.datetime.value,
      "orders": JSON.parse(localStorage.getItem('cart')),
      "cost": document.getElementById("total").textContent
    }
    try{const response = await fetch('http://my-json-server.typicode.com/BeataStultica/pizza/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  });
    const json = await response.json();
    
    window.location.hash = 'order/'+json.id;
    localStorage.clear();
    document.getElementById("ItemNumb").textContent='0';
    const rootNode = document.getElementById('main');
    rootNode.innerHTML = `<h3 class='text-center mt-5'>Дякуємо за замовлення!</h3>
    <h4 class='text-center ml-0'>Номер вашого замовлення: ${json.id}</h4>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6" >
        <h4 class="end">Очікуваний час доставки: ${json.time.split('T').join(' ')}</h4>
        <h4 class="end">Контактне імя: ${json.name + ' '+json.lastname}</h4>
        <h4 class="end">Телефон: ${json.tel}</h4>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6" >
          <h4 class="end">Вартість: ${json.cost}грн.</h4>
          <h4 class="end">Адреса: ${json.address}</h4>
          <h4 class="end">Електронна пошта: ${json.email}</h4>
        </div>
      </div>
      <a class="btn btn-danger btn-lg" id = "href_but" href = "#" role = "button">На головну сторінку</a>
    </div>`;
    }catch(error){
          document.getElementById("main").innerHTML='<h2>Помилка доступу до сервера 404, спробуйте пізніше</h2>'
          document.getElementById("spiner-box").style.width= '90vw'
          document.getElementById("spiner-box").style.height= '90vh'
    }
  }



}

