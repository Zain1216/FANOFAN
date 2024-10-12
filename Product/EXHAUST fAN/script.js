const products = [
 {
        title: "Exhaust Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$40",
        image: "https://i.pinimg.com/474x/e0/95/66/e095666d69f6bf54915219b9fda1ef46.jpg",
    },
    {
        title: "Exhaust Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$34",
        image: "https://i.pinimg.com/564x/68/7e/83/687e8307b5d20c6db2979e11694e9445.jpg",
    },
    {
        title: "Exhaust Fan",
        description: "Crafted for comfort, designed for delight.",
        price: "$40",
        image: "https://i.pinimg.com/474x/20/4d/cd/204dcd82daa2c51082b900892bf9196f.jpg",
    },{ 
        title: "Exhaust Fan",
        description: "A perfect blend of functionality and design.",
        price: "$37",
        image: "https://i.pinimg.com/474x/08/9c/6c/089c6c0111b84749a3c6dc925663bc0d.jpg",
    },
    { 
        title: "Exhaust Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$35",
        image: "https://i.pinimg.com/474x/59/03/66/590366de0092e385410bb3c4b9a348c1.jpg",
    },
    {
        title: "Exhaust Fan",
        description: "Breathe easy and chill out in style.",
        price: "$37",
        image: "https://i.pinimg.com/736x/20/4d/cd/204dcd82daa2c51082b900892bf9196f.jpg",
    },
    {
        title: "Exhaust Fan",
        description: "Feel the flow while enhancing your decor!",
        price: "$40",
        image: "https://i.pinimg.com/474x/09/0c/18/090c18991a24003418312fa68c464c54.jpg",
    },{ 
        title: "Exhaust Fan",
        description: "Our exhaust ceiling fan combines style and functionality.",
        price: "$37",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5wL1w_LB6a4L4FRwGNWKQobIerYnFBm1MQ&s",
    },{ 
        title: "Exhaust Fan",
        description: "Stay cool and comfortable with our stylish ceiling fan!",
        price: "$45",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfykANWH-MbMXTnWYiWB_BlD3sp_H-sqifWg&s",
    },
    {
        title: "Exhaust Fan",
        description: "Beat the heat with our chic ceiling fans.",
        price: "$39",
        image: "https://i.pinimg.com/474x/4f/65/4f/4f654f6f872e7873192df0f372789b2d.jpg",
    },
    {
        title: "Exhaust Fan",
        description: "Stay refreshed and stylish with every spin..",
        price: "$42",
        image: "https://i.pinimg.com/564x/02/72/98/027298d57a385331b1e6e7bf2b14b768.jpg",
    },
    {
        title: "Exhaust Fan",
        description: "Circulate comfort and charm in any room",
        price: "$40",
        image: "https://i.pinimg.com/474x/56/c7/2c/56c72c8dd8430488357a4888c7d96ae3.jpg",
    },
    {
        title: "Exhaust Fan",
        description: "Effortless style and cooling comfort in one",
        price: "$38",
        image: "https://i.pinimg.com/564x/08/38/5b/08385bf594258a71aacc49379e8de7a1.jpg",
    },
    {
        title: "Exhaust Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$36",
        image: "https://i.pinimg.com/564x/65/1f/6e/651f6e79fbeb3763a1c53adf1a92d2ee.jpg",
    },
    {
        title: "Exhaust Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$44",
        image: "https://i.pinimg.com/564x/02/77/5d/02775d1d344ebb7a99c2d56d306efb7f.jpg",
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

