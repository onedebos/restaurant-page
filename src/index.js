import homeContent from './start';
import createContact from './contact';
import createMenu from './menu';

homeContent();
createContact();
createMenu();

const contactTab = document.querySelector('.contact');
const menuTab = document.querySelector('.menu');

const grabBtns = ((menuBtn, contactBtn, homeBtn) => {
  menuBtn = document.querySelector('#menu-btn');
  homeBtn = document.querySelector('#home-btn');
  contactBtn = document.querySelector('#contact-btn');
  return { menuBtn, contactBtn, homeBtn };
})();

const Tabs = () => {
  const hideTabs = () => {
    contactTab.style.display = 'none';
    menuTab.style.display = 'none';
  };

  const showMenu = () => {
    menuTab.style.display = 'block';
    contactTab.style.display = 'none';
  };

  const showContact = () => {
    contactTab.style.display = 'block';
    menuTab.style.display = 'none';
  };

  const showHome = () => {
    contactTab.style.display = 'none';
    menuTab.style.display = 'none';
  };

  return {
    hideTabs, showMenu, showContact, showHome,
  };
};


const tab = Tabs();
tab.hideTabs();

grabBtns.contactBtn.onclick = () => {
  tab.showContact();
};

grabBtns.homeBtn.onclick = () => {
  tab.showHome();
};

grabBtns.menuBtn.onclick = () => {
  tab.showMenu();
};
