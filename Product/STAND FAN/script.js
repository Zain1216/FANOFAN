const products = [

    {
        title: "Stand Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$25",
        image: "https://i.pinimg.com/564x/be/d0/f6/bed0f6dc9a4fdf0da3fdc81a5b594e9d.jpg",
    },
    {
        title: "Stand Fan",
        description: "Crafted for comfort, designed for delight.",
        price: "$210",
        image: "https://i.pinimg.com/564x/ad/16/06/ad1606f9bc4b1bda3e18538a66728c85.jpg",
    }, 
    {
        title: "Stand Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$28",
        image: "https://i.pinimg.com/564x/46/9d/1d/469d1d82db98bde1d633ba718bca261f.jpg",
    },
    {
        title: "Stand Fan",
        description: "Breathe easy and chill out in style.",
        price: "$23",
        image: "https://i.pinimg.com/474x/9d/a3/70/9da3708ff72e2682ea73654f49a000e1.jpg",
    },
    {
        title: "Stand Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$22",
        image: "https://i.pinimg.com/474x/d3/fe/73/d3fe7313878f3b73aa28073553f11ca1.jpg",
    },
    {
        title: "Stand Fan",
        description: "A perfect blend of functionality and design.",
        price: "$26",
        image: "https://i.pinimg.com/474x/b4/01/e4/b401e4f8e66d1c4b4b4e807e01299079.jpg",
    },
    {
        title: "Stand Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$24",
        image: "https://i.pinimg.com/474x/db/84/ce/db84cef3c40e88a459f9a8507e255cef.jpg",
    },
    {
        title: "Stand Fan",
        description: "Feel the flow while enhancing your decor!",
        price: "$25",
        image: "https://i.pinimg.com/474x/cf/75/93/cf75936cec043b3f3d0329ca033b580d.jpg",
    },
    {
        title: "Stand Fan",
        description: "Beat the heat with our chic ceiling fans.",
        price: "$21",
        image: "https://i.pinimg.com/564x/5a/a7/9b/5aa79b785fad6f7f31ceb31ad225c4c2.jpg",
    },
    {
        title: "Stand Fan",
        description: "Stay cool and comfortable with our stylish ceiling fan!",
        price: "$27",
        image: "https://i.pinimg.com/474x/a8/17/61/a81761ebc50bf7e7644c62173a8675a1.jpg",
    },
    {
        title: "Stand Fan",
        description: "Stay refreshed and stylish with every spin..",
        price: "$24",
        image: "https://i.pinimg.com/474x/2c/e8/6c/2ce86cf42abc5f3888a6e5d690fc3107.jpg",
    },
    {
        title: "Stand Fan",
        description: "Circulate comfort and charm in any room",
        price: "$22",
        image: "https://i.pinimg.com/564x/3d/61/15/3d6115c6344c0340e19fcbfcd698f103.jpg",
    },
    {
        title: "Stand Fan",
        description: "Effortless style and cooling comfort in one",
        price: "$20",
        image: "https://i.pinimg.com/564x/3b/a5/47/3ba547d4c63f61b038f2f31c78807c60.jpg",
    },
    {
        title: "Stand Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$23",
        image: "https://i.pinimg.com/564x/ac/fe/3e/acfe3eea234423c4268f8e4d7dafa7db.jpg",
    },
    {
        title: "Stand Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$25",
        image: "https://i.pinimg.com/564x/9c/16/9c/9c169caaddeb644f5e44ba345d5e212d.jpg",
    },
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

