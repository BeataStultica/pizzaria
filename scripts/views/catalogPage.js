function categorySort(product){
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
    return [firstCategory,sort_category]
}


function view(product){
    let content = categorySort(product)
    let html_body = `<div class = "container-fluid">
    <div class="sectionName">Категорії піци:</div>
    <ul class="nav justify-content-center" id = "cat_box">
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3" >
        <li class="nav-item">
            <a class="nav-link" id="cat" href="#section/1">Класична</a>
        </li>
        </div>
        
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3" >
        <li class="nav-item">
            <a class="nav-link" id="cat" href="#section/2">Фірмова</a>
        </li>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3" >
        <li class="nav-item">
            <a class="nav-link" id="cat" href="#section/3">Легенди</a>
        </li>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3" >
        <li class="nav-item">
            <a class="nav-link" id="cat" href="#section/4">Преміум</a>
        </li>
        </div>
        </ul>`
    for (let i = 0; i< content[0].length;i++){
        html_body += `<h3 class="text-center">${content[0][i]}</h3>`
        html_body += `<div class =  "row" id="recom">
        ${content[1][i].map((item) =>`
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
    }
    return html_body
}

export default view;