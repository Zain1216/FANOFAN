// -----------nav & footer-------

$(document).ready(()=>{

    $.get('../navbar & footer/navbar.html',(data)=>{
        $('#Navbar').html(data)
        console.log(data)
    })
    $.get('../navbar & footer/footer.html',(data)=>{
        $('#footer').html(data)
    })
})
const products = [
   
 {
        title: "Ceiling Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$40",
        image: "https://i.pinimg.com/564x/3f/aa/c2/3faac2dc9257df26604dcb8304994d40.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$34",
        image: "https://i.pinimg.com/564x/ee/66/e3/ee66e3b3439adb3bf40459ff094b696a.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Crafted for comfort, designed for delight.",
        price: "$40",
        image: "https://i.pinimg.com/564x/ba/94/a2/ba94a29bdc80c2fad58beba8fda6e6c8.jpg",
    },{ 
        title: "Ceiling Fan",
        description: "A perfect blend of functionality and design.",
        price: "$37",
        image: "https://i.pinimg.com/564x/7b/1e/8c/7b1e8c9a9e1d559ac8c39848621b84bc.jpg",
    },
    { 
        title: "Ceiling Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$35",
        image: "https://i.pinimg.com/564x/3c/14/ca/3c14ca8a7c2dd67c9893086b5f673162.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Breathe easy and chill out in style.",
        price: "$37",
        image: "https://i.pinimg.com/564x/6d/3b/5d/6d3b5d7dabd4180bc948879c7f508fc8.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Feel the flow while enhancing your decor!",
        price: "$40",
        image: "https://i.pinimg.com/564x/d9/a6/65/d9a6659ea039bef18864bb0490fb43cd.jpg",
    },{ 
        title: "Ceiling Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$37",
        image: "https://i.pinimg.com/564x/f3/21/e3/f321e302fd07a961096d7c72786be58a.jpg",
    },{ 
        title: "Ceiling Fan",
        description: "Stay cool and comfortable with our stylish ceiling fan!",
        price: "$45",
        image: "https://i.pinimg.com/564x/b3/f5/b4/b3f5b4935ac6a360075fb8b6e73d9921.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Beat the heat with our chic ceiling fans.",
        price: "$39",
        image: "https://i.pinimg.com/474x/be/e7/ee/bee7ee2fb23301333376ddc73561c3a3.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Stay refreshed and stylish with every spin..",
        price: "$42",
        image: "https://i.pinimg.com/474x/85/51/43/855143fff333ed310d78addcb552368b.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Circulate comfort and charm in any room",
        price: "$40",
        image: "https://i.pinimg.com/474x/cf/c3/d1/cfc3d148e7a1d360cfaf536f33ee7f90.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Effortless style and cooling comfort in one",
        price: "$38",
        image: "https://i.pinimg.com/474x/4d/01/6d/4d016d93bd612007cbf057c961b8ae8c.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$36",
        image: "https://i.pinimg.com/564x/b8/98/bd/b898bd4ad828875729627aab25b29242.jpg",
    },
    {
        title: "Ceiling Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$44",
        image: "https://i.pinimg.com/474x/c7/34/43/c7344399c222a50c8d83b7945fdd3bd9.jpg",
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

