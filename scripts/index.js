// import ....
import TemplateProcessor from './templateProcessor.js';
import Client from './client.js';
import Router from './router.js';
import spiner from './spiner.js'

function render(){
    spiner.view_spiner()
    const router = new Router();
    const templateProcessor = new TemplateProcessor();
    const client = new Client();
    const { viewName, endpointName } = router.getCurrentState();
    let view;
        import(`./views/${viewName}.js`)
            .then((viewModule) =>  {
                view = viewModule.default;
                return client.getData(endpointName);
            })
            .then((data) => {
                let view_page = view(data);
                if (view_page){
                templateProcessor.render(view(data))}
                else{
                    window.location.hash = '';
                }
            }).then(()=>{spiner.close_spiner()});
}
render();

window.onhashchange = () => {
    let checker = window.location.hash.split('/')
    if (flag){
        flag = false
    }
    else{
        render()
    }
}



