import { add } from 'lodash';
import mapImg from '../assets/map.png';

export default function contactPage() {
  const contactPage = document.createElement('div');
  contactPage.classList.add('contact-page');

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '📞 0123 456 789';

  const address = document.createElement('p');
  address.textContent = '🏠 Zagazig, Egypt';

  const map = document.createElement('img');
  map.src = mapImg;

  contactPage.appendChild(phoneNumber);
  contactPage.appendChild(address);
  contactPage.appendChild(map);

  return contactPage;
}
