export default function menuPage() {
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page');
  const createItem = (image, title, description) => {
    const newItem = document.createElement('div');
    newItem.classList.add('menu-item');

    const itemTitle = document.createElement('h2');
    itemTitle.textContent = title;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    newItem.appendChild(image);
    newItem.appendChild(title);
    newItem.appendChild(title);

    menuPage.appendChild(newItem);
  };

  createItem(
    '../assets/Burger1.png',
    'Burger',
    'A flame-grilled beef patty with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun.'
  );

  return menuPage;
}
