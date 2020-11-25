const view = (main) => `
<div class="slider">
  <button type="button" class="btn btn-primary" id = "first_but" onclick="prev()">&laquo;</button>
  <button type="button" class="btn btn-primary" id = "next_but" onclick="next()">&raquo;</button>
  <div class="slides">
  ${main[0].map((slide) => 
    `<div class="slide">
      <a href = "#action/${slide.url}"><img src="img/${slide.img}" alt=""></a>
    </div>`).join('')}
  </div>
</div>
<div class = "container-fluid">        
  <h3 class="text-center">Рекомендації тижня</h3>
  <div class = "row" id="recom">
  ${main[1].map((item) =>`
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <div class="card">
        <img class="card-img-top" src = "img/pizza/${item.img}" alt="!">
        <h4 class="card-title">${item.title}</h4>
        <div class="class-body text-center">
        ${item.desc}
        </div>
        
        <button class="basket_add btn btn-danger"  value=${item.url} onclick = addLocalStorage(value)>В корзину</button>
        <a class="btn btn-danger" id = "href_but" href = "#catalog/${item.url}" role = "button">Детальніше</a>
      </div>
    </div>
`).join('')}
</div>
</div>
`;
export default view;