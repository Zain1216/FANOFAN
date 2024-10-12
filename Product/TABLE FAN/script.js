const products = [

    {
        title: "Table Fan",
        description: "Our sleek table fan combines style and functionality.",
        price: "$25",
        image: "https://i.pinimg.com/originals/5a/6b/92/5a6b929ce05b269dd2e6a005f6e2fc36.gif",
    },
    {
        title: "Table Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$28",
        image: "https://i.pinimg.com/originals/00/ca/f1/00caf195e7af2cf94413a12661362406.gif",
    },
    {
        title: "Table Fan",
        description: "A perfect blend of functionality and design.",
        price: "$26",
        image: "https://cdn.dribbble.com/users/713272/screenshots/4892029/fan_linked_comp_8.gif",
    },
    {
        title: "Table Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$22",
        image: "https://cdn.dribbble.com/users/1036957/screenshots/2433112/mybiggestfan.gif",
    },
    {
        title: "Table Fan",
        description: "Crafted for comfort, designed for delight.",
        price: "$210",
        image: "https://cdn.dribbble.com/users/1835572/screenshots/4722655/fengshan.gif",
    },
    {
        title: "Table Fan",
        description: "Breathe easy and chill out in style.",
        price: "$23",
        image: "https://i.pinimg.com/originals/b6/1d/b7/b61db778073552f8761af75a486787d5.gif",
    },
    {
        title: "Table Fan",
        description: "Feel the flow while enhancing your decor!",
        price: "$25",
        image: "https://media.tenor.com/DW7uAl7rCc4AAAAd/ventilador.gif",
    },
    {
        title: "Table Fan",
        description: "Our sleek table fan combines style and functionality.",
        price: "$23",
        image: "https://cdn.dribbble.com/users/2281147/screenshots/4830665/___.gif",
    },
    {
        title: "Table Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$24",
        image: "https://i.pinimg.com/originals/8f/05/38/8f05381e6baf5d306e03634eaef45c6c.gif",
    },
    {
        title: "Table Fan",
        description: "Stay refreshed and stylish with every spin..",
        price: "$24",
        image: "https://cdn.dribbble.com/users/1570263/screenshots/15470387/media/06b78fd52f1a9935ed8633c8d21949d7.gif",
    },
    {
        title: "Table Fan",
        description: "Stay cool and comfortable with our stylish ceiling fan!",
        price: "$27",
        image: "https://usagif.com/wp-content/uploads/2022/fzk5d/fan-gif-11-stripes-yellow-background-fan-acegif.gif",
    },
    {
        title: "Table Fan",
        description: "Beat the heat with our chic ceiling fans.",
        price: "$21",
        image: "https://i.pinimg.com/originals/2f/78/cb/2f78cbb5a66140c4f953c4ea0a07bbf0.gif",
    },
    {
        title: "Table Fan",
        description: "Circulate comfort and charm in any room",
        price: "$22",
        image: "https://cdn.dribbble.com/users/435687/screenshots/4131415/spinningfasterererer_12.gif",
    },
    {
        title: "Table Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$25",
        image: "https://usagif.com/wp-content/uploads/2022/fzk5d/fan-gif-36-little-3d-fan.gif",
    },
    {
        title: "Table Fan",
        description: "Effortless style and cooling comfort in one",
        price: "$20",
        image: "https://usagif.com/wp-content/uploads/2022/fzk5d/fan-gif-31-rainbow-fan.gif",
    }
];

const cardContainer = document.getElementById('card-container');

products.forEach(product => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('product-card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;

    const favoriteStar = document.createElement('span');
    favoriteStar.classList.add('favorite-star');
    favoriteStar.textContent = '★';

    // Toggle favorite star on click
    favoriteStar.addEventListener('click', () => {
        favoriteStar.classList.toggle('active');
    });

    imageContainer.appendChild(img);
    imageContainer.appendChild(favoriteStar);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const title = document.createElement('h2');
    title.textContent = product.title;

    const description = document.createElement('p');
    description.textContent = product.description;

    const priceOrder = document.createElement('div');
    priceOrder.classList.add('price-order');

    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = product.price;

    const orderButton = document.createElement('button');
    orderButton.classList.add('order-button');
    orderButton.textContent = 'Order Now';

    priceOrder.appendChild(price);
    priceOrder.appendChild(orderButton);

    productInfo.appendChild(title);
    productInfo.appendChild(description);
    productInfo.appendChild(priceOrder);

    cardElement.appendChild(imageContainer);
    cardElement.appendChild(productInfo);

    cardContainer.appendChild(cardElement);


    orderButton.addEventListener('click', () => {
        alert(`You have ordered: ${product.title} for ${product.price}`);
    });

});

