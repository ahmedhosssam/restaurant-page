export default function homePage() {
  const homePage = document.createElement('div');
  homePage.classList.add('home-page');
  const pOne = document.createElement('p');
  pOne.textContent = 'Best restaurant in your country';

  const pTwo = document.createElement('p');
  pTwo.textContent = 'Since 2001';

  const img = document.createElement('img');
  img.src = '../assets/burger.jpg';

  homePage.appendChild(pOne);
  homePage.appendChild(pTwo);
  homePage.appendChild(img);

  return homePage;
}
