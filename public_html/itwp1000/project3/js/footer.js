const footerNav = document.createElement('nav');
footerNav.id = 'footer-menu-container';

const footerList = document.createElement('ul');
footerList.classList.add('footer-menu');

const navLinks = [
  { text: 'Home', url: 'index.html' },
  { text: 'Rules/Categories', url: 'about.html' },
  { text: 'Vote', url: 'projects.html' },
  { text: 'Winner Gallery', url: 'elements.html' },
  { text: 'Submit', url: 'blog-home.html' }
];

navLinks.forEach(link => {
  const listItem = document.createElement('li');
  const linkElement = document.createElement('a');
  linkElement.href = link.url;
  linkElement.textContent = link.text;
  listItem.appendChild(linkElement);
  footerList.appendChild(listItem);
});

footerNav.appendChild(footerList);
document.getElementById('footer').appendChild(footerNav);
