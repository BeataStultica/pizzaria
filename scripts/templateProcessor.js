class TemplateProcessor {
    render(view) {
        const rootNode = document.getElementById('main');
        rootNode.innerHTML = view;
        window.scrollTo(0,0);
    }
}

export default TemplateProcessor;
