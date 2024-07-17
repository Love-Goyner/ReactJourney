const renderElement = (Element, Container)=>{
    const DOMElement = document.createElement(Element.type);
    DOMElement.innerHTML = Element.children;
    DOMElement.setAttribute('href', Element.props.href);
    DOMElement.setAttribute('target', Element.props.target);

    Container.appendChild(DOMElement);
}

const newElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click here to open google'
}

const mainContainer = document.querySelector('#root');

renderElement(newElement, mainContainer);
