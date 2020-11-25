class TemplateProcessor {
    render(view) {
        const rootNode = document.getElementById('main');
        rootNode.innerHTML = view;
    }
}

export default TemplateProcessor;
