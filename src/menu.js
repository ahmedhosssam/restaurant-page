import Burger1 from '../assets/Burger1.png';
import pizza from '../assets/pizza.png';
import fried from '../assets/fried.png';
import can from '../assets/Can.png';
import fries from '../assets/fries.png';

export default function menuPage() {
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page');

  // Create Food item and add it to menuPage
  const createItem = (image, title, description) => {
    const newItem = document.createElement('div');
    newItem.classList.add('menu-item');

    const itemTitle = document.createElement('h2');
    itemTitle.textContent = title;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const img = document.createElement('img');
    img.src = image;

    newItem.appendChild(img);
    newItem.appendChild(itemTitle);
    newItem.appendChild(itemDescription);

    menuPage.appendChild(newItem);
  };

  createItem(
    Burger1,
    'Burger',
    'A flame-grilled beef patty with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun'
  );

  createItem(
    pizza,
    'Pizza',
    'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'
  );

  createItem(
    fried,
    'Freid Chicken',
    'When talking about chicken recipes, it’s hard to deny that there is one dish in particular that stands high above the rest, casting its crispy shadow on the lesser foods over which it rules. That dish, of course, is fried chicken.'
  );

  createItem(can, 'Pepsi', 'An Pepsi can with ice!');

  createItem(fries, 'Fries', 'You know it!');

  return menuPage;
}
