
const createContact = (contactDiv) =>{
    const wrapperContact = document.getElementById('content');
    contactDiv = document.createElement('div');
    const contactHeader = document.createElement('h1');
    contactHeader.classList.add('title');
    const contactBody = document.createElement('div');
    contactHeader.innerHTML += 'Contact';
    contactBody.innerHTML += 'Phone: +44 94 04 but iwo mafo';
    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactBody);
    contactDiv.classList.add('box');
    contactDiv.classList.add('contact');
    wrapperContact.appendChild(contactDiv);

    return {contactDiv};
}






export { createContact };