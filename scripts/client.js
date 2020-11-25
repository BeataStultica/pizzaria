class Client {
    getData(endpoint) {
        return fetch(`https://my-json-server.typicode.com/BeataStultica/pizza/${endpoint}`)
            .then(response => response.json());
    }
}

export default Client;
