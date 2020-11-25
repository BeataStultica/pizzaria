



function view(products){
    let count = document.getElementById("ItemNumb").textContent;
    let temp = JSON.parse(localStorage.getItem('cart'));
    let total = 0;
    if (temp == undefined){
      temp = {};
    }
    let backet_list = []
    for (let i = 0; i<products.length;i++){
        for (let j in temp){
            if (products[i].url == j){
                total +=products[i].price*temp[j]
                backet_list.push([products[i],temp[j]])
            }
        }
    }
    let body = `
    <div class="container">
    <div class="row">
    <div class="col-md-8  mb-3">
    <h3 class="mb-3">Деталі замовлення</h3>
      <form class="needs-validation" id='order' onsubmit="sendPOST()" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="name">Імя</label>
            <input type="text" class="form-control" id="name" placeholder="" pattern="[a-zA-Zа-яА-ЯіІїЇєЄ]+" value="" required="">
            <div class="invalid-feedback">
                Імя має складатись з букв кирилиці або латиниці
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Прізвище</label>
            <input  type="text" class="form-control" id="lastName" placeholder="" pattern="[a-zA-Zа-яА-ЯіІїЇєЄ]+" value="" required="">
            <div class="invalid-feedback">
              Прізвище має складатись з букв кирилиці або латиниці
            </div>
          </div>
        </div>

        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="rand@pizz.com" required ="true" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.]+[a-z]{2,}">
                <div class="invalid-feedback">
                    Будь ласка введіть дійсний email
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <label for="address">Адресa</label>
                <input type="text" class="form-control" id="adres" placeholder="" required="true">
                <div class="invalid-feedback">
                    Потрібно ввести адресу доставки
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="phone">Номер телефона</label>
            <input maxlength="13" id="phone" type="tel" pattern="[+]+[3]+[8]+[0]+[0-9]{9}" class="form-control" placeholder="+380111111111" required="true">
            <div class="invalid-feedback">
              Потрібно ввести номер телефона
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="datetime">Виберіть дату і час доставки</label>
            <input class="form-control" type="datetime-local" id="datetime"  required = "true">
            <div class="invalid-feedback">
                Введіть дату й час
            </div>
          </div>
          
        </div>
        <hr class="mb-4">
        <h3 class="mb-3">Оплата</h3>

        <div class="row">
          <div class="col-md-12 mb-3">
            <label for="card_number">Номер карти</label>
            <input type="text" maxlength="16" minlength="16" class="form-control" id="card_number" required="true">
            <div class="invalid-feedback">
              Введіть корректний номер карти
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="cart_date">Срок дії</label>
            <input type="text" pattern="[0-9]{2}/[0-9]{2}" placeholder="01/12"  class="form-control" id="card_date" required="true">
            <div class="invalid-feedback">
              Введіть термін дії карти
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cvv">CVV</label>
            <input type="text" pattern="[0-9]{3}" class="form-control" id="cvv" placeholder="111" required="true">
            <div class="invalid-feedback">
              Введіть CVV код
            </div>
          </div>
        </div>
        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit">Замовити</button>
      </form>
    </div>
    <div class="col-md-4 mt-5 mb-3">
        <div class = "d-flex justify-content-between">
        <span id="tovar">Товари в корзині:</span>
        <span class = "count">${count}</span>
        </div>
    ${backet_list.map((item) =>`
        <div class = "order_pizza border border-dark">
        <h4 class="card-title">${item[0].name}</h4>
        <div class="class-body text-center">
        Ціна: ${item[0].price}грн. x ${item[1]}=${item[0].price*item[1]}грн.</div></div>`).join('')}
    <div class="border border-dark " ><span id="tovar" class = "vartist">Загальна вартість: <span id="total">${total}</span>грн</span></div>
    </div>
</div>
</div>`

    return body
}
export default view;