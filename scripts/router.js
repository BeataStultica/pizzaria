
class Router {
    getCurrentState() {
        let viewName = '';
        let endpointName = '';
        let hash = window.location.hash.split('#')
        let double_hash = []
        if (hash[1]){
            double_hash = hash[1].split('/')}
        if (double_hash.length == 1){
            switch(hash[1]){
            case 'catalog':
                clearInterval(timer)
                viewName = 'catalogPage';
                endpointName = 'products';
                break;
            
            case 'order':
                clearInterval(timer)
                viewName = 'orderPage';
                endpointName = 'products';
                break;
            
            case'cart':
                clearInterval(timer)
                viewName = 'backetPage';
                endpointName = 'products';
                break;
            
            default:
                timer = setInterval(cicle,8000)
                viewName = 'mainPage';
                endpointName = 'main';
                break;
            }
        }
        else if (double_hash.length == 2){
            switch(double_hash[0]){
            case "catalog":
                clearInterval(timer)
                viewName = 'productPage';
                endpointName = 'products';
                break;
            
            case "action":
                clearInterval(timer)
                viewName = 'actionPage';
                endpointName = 'main';
                break;
            case "section":
                clearInterval(timer)
                viewName = 'categoryPage';
                endpointName = 'products';
                break;
            
            default:
                timer = setInterval(cicle,8000)
                viewName = 'mainPage';
                endpointName = 'main';
                break;
            }

        }
        else{
                timer = setInterval(cicle,8000)
                viewName = 'mainPage';
                endpointName = 'main';

        }

        return {
            viewName,
            endpointName
        };
    }
}

export default Router;
