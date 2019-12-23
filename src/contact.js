
const createContact = () =>{
    const wrapperContact = document.getElementById('content');
    const contactHeader = document.createElement('h1');
    contactHeader.classList.add('title');
    const contactBody = document.createElement('div');
    contactHeader.innerHTML += 'Contact';
    contactBody.innerHTML += 'Phone: +44 94 04 but iwo mafo';
    wrapperContact.appendChild(contactHeader);
    wrapperContact.appendChild(contactBody);
    wrapperContact.classList.add('box');
}



export { createContact };