function action_url(main){
    let url =window.location.hash.split('/')[1]
    for (let i=0;i < main[0].length;i++){
        if (main[0][i].url == url){
            return main[0][i]
        }
    }
}

function view(main){
    let actia = action_url(main)

    let body =  `
    <div class = "container-fluid">
        <div class = "row">
            <div class="col-sm-12 col-md-8">
                <img src="img/${actia.img}" id = "action_detal" alt="">
            </div>
            <div class="col-sm-12 col-md-4">
                <p>${actia.date}</p>
                <h3>${actia.title}</h3>
                <p> ${actia.desc}</p>
            </div>
        </div>
    </div>
    `;

    return body
}
export default view;