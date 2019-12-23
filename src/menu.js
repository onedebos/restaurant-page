const createMenu = () =>{
    const wrapper = document.getElementById('content');
    const menuDiv = document.createElement('div');
    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('title');
    menuDiv.appendChild(menuHeader);
    menuHeader.innerHTML += 'Menu'
    const foods = document.createElement('div');
    foods.innerHTML += 'Burgers, Fries and shakes'
    menuDiv.appendChild(foods);
    menuDiv.classList.add('box');
    menuDiv.classList.add('menu');
    wrapper.appendChild(menuDiv);

}

export { createMenu };