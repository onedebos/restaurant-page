const createMenu = () =>{
    const wrapper = document.getElementById('content');
    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('title');
    wrapper.appendChild(menuHeader);
    menuHeader.innerHTML += 'Menu'
    const foods = document.createElement('div');
    foods.innerHTML += 'Burgers, Fries and shakes'
    wrapper.appendChild(foods);
    wrapper.classList.add('box');

}

export { createMenu };