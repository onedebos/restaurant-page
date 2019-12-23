

const homeContent = () =>{
    const content = document.getElementById('content');
    const box = document.createElement('div');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const textNode = document.createTextNode('Welcome to Louvre Restaurant');
    const textNode1 = document.createTextNode('We offer cuisines from across the World in our luxurious space.');
    const logo = document.createElement('img');
    box.classList.add('box');
    content.appendChild(box);
    h1.appendChild(textNode);
    box.appendChild(div);
    box.appendChild(h1);
    box.appendChild(textNode1);
    div.appendChild(logo);
    logo.classList.add('logo');
    logo.src = "/img/logo.png"
    



}

export { homeContent };