const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
switchRef.addEventListener('change', changeTheme);
switchRef.addEventListener('change', toggleSave);

bodyRef.classList.add(Theme.LIGHT);

function changeTheme() {
  bodyRef.classList.toggle(Theme.DARK);
  bodyRef.classList.toggle(Theme.LIGHT);
}

function toggleSave() {
  const classDescription = bodyRef.className;
  localStorage.setItem('theme', classDescription);
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme === Theme.DARK) {
  bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
  switchRef.checked = true;  
}
