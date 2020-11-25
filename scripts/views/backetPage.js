function view(products){
    let temp = JSON.parse(localStorage.getItem('cart'))
    if (temp == undefined){
      temp = {}
    }
    let backet_list = []
    for (let i = 0; i<products.length;i++){
        for (let j in temp){
            if (products[i].url == j){
                backet_list.push([products[i],temp[j]])
            }
        }
    }
    let body = `
    <h3 class="text-center">Корзина</h3>
    <div class = "container-fluid">
        <div class = "row">`;
    body +=`
    ${backet_list.map((item) =>`
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" id = ${item[0].url}>
        <div class="card">
        <a class ="card-a" href =#catalog/${item[0].url}><img class="card-img-top" src = "img/pizza/${item[0].image[1]}" alt="!" href = #catalog/${item[0].url}></a>
        <h4 class="card-title">${item[0].name}</h4>
        <div class="class-body text-center">
        Ціна: ${item[0].price}грн. x ${item[1]}=${item[0].price*item[1]}грн.
        </div>
        <button class="basket_add btn btn-danger" value = ${item[0].url} onclick = "removeLocalStorage(value)">Видалити з корзини</button>
        </div>
    </div>
`).join('')}
</div>`;
    let total = 0
    for (let k=0;k< backet_list.length;k++){
        total +=backet_list[k][0].price*backet_list[k][1]
    }
    body +=`</div>
    <h3 class="text-center">Загальна вартість: ${total}грн</h3>
    <a class="orders btn btn-danger btn-lg" href = #order role = "button">Замовити</button>
    `
    return body
}

export default view;
