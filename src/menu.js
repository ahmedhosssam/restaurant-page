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
    '../assets/Burger1.png',
    'Burger',
    'A flame-grilled beef patty with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun'
  );

  createItem(
    '../assets/pizza.png',
    'Pizza',
    'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'
  );

  createItem(
    '../assets/fried.png',
    'Freid Chicken',
    'When talking about chicken recipes, it’s hard to deny that there is one dish in particular that stands high above the rest, casting its crispy shadow on the lesser foods over which it rules. That dish, of course, is fried chicken.'
  );

  createItem('../assets/Can.png', 'Pepsi', 'An Pepsi can with ice!');

  createItem('../assets/fries.png', 'Fries', 'You know it!');

  return menuPage;
}
