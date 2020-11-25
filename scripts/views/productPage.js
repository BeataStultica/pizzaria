function product_url(products){
    let url =window.location.hash.split('/')[1]
    for (let i=0;i < products.length;i++){
        if (products[i].url == url){
            return products[i]
        }
    }
}

function view(products){
    let product = product_url(products)

    let body =  `
    <div class = "container-fluid">
        <div class = "row">
            <div class="col-sm-12 col-md-8">
                <img src="img/pizza/${product.image[0]}" id = "detal_pizza" alt="">
            </div>
            <div class="col-sm-12 col-md-4">
                <h3>${product.name}</h3>
                <p>Склад: ${product.description}</p>
                <p>Ціна: ${product.price}грн.</p>
                <p>Вага:${product.weight}г.</p>
                <form class="needs-validation" id =${product.url} onsubmit = "addLocalStorage(id,true)" novalidate="">
                    <label for="pizza_count">Кількість:</label>
                    <input min="1" max="999" id="pizza_count" type="number" class="form-control" required=""> 
                    <div class="invalid-feedback">
                        Число піц має бути більше нуля
                    </div>
                </form>
                <button class="basket_add btn btn-danger" onclick = "addLocalStorage(value,true)" value=${product.url}>В корзину</button>
            </div>
        </div>
        <h3>Схожа піца</h3>
        <div class = "row">
    `;
    let related_pizza = product.related
    for (let i = 0; i < related_pizza.length; i++){
        
        body+=`
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" >
                <h4>${products[related_pizza[i]].name}</h4>   
                <a href = #catalog/${products[related_pizza[i]].url}><img src="img/pizza/${products[related_pizza[i]].image[0]}" id = "related_pizza" alt=""></img></a>
            </div>
        `;
        
    }
    body+=`</div>
    </div>`
    return body
}
export default view;