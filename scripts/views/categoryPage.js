function categorySort(product){
    let category = Number(window.location.hash.split('/')[1])-1
    let firstCategory = [product[0].category]
    let flag = true
    let sort_category = [[product[0]]]
    for (let i = 1; i <product.length; i++){
        flag = true
        for (let j = 0; j <firstCategory.length; j++){
            if (product[i].category == firstCategory[j]){
                sort_category[j].push(product[i])
                flag = false
                break;
            }
        }
        if (flag ==true){
            firstCategory.push(product[i].category)
            sort_category.push([product[i]])
        }       
    
    }
    return [firstCategory[category],sort_category[category]]
}


function view(product){
    let content = categorySort(product)
    let html_body = '<div class = "container-fluid">'
    if (content[0]==undefined){
        return false
    }
    html_body += `<h3 class="text-center">${content[0]}</h3>`
    html_body += `<div class =  "row" id="recom">
    ${content[1].map((item) =>`
          <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" >
            <div class="card">
              <img class="card-img-top" src = "img/pizza/${item.image[1]}" alt="!" href = #catalog/${item.url}>
              <h4 class="card-title">${item.name}</h4>
              <div class="class-body text-center">
              Ціна: ${item.price}грн.  Вага: ${item.weight}г.
              </div>
              
              <button class="basket_add btn btn-danger" id="basket_add" value=${item.url} onclick = addLocalStorage(value)>В корзину</button>
              <a class="btn btn-danger" id = "href_but" href = "#catalog/${item.url}" role = "button">Детальніше</a>
            </div>
          </div>
        `).join('')}
        </div>`;
    return html_body
}

export default view;
