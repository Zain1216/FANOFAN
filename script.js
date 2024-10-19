// -----------nav & footer-------

$(document).ready(()=>{

    $.get('navbar.html',(data)=>{
        $('#Navbar').html(data)
    })
    $.get('footer.html',(data)=>{
        $('#footer').html(data)
    })
   
})

// --------------------headerbanner----------------------
    

    var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()
    
// ------------card-----------
$(document).ready(function () {
    const cardsData = [
        {
            title: "Ceiling Fan",
            description: "Unmatched comfort",
            imageUrl: "https://i.pinimg.com/474x/b2/c1/e0/b2c1e0c703a9dc3dbf6fea568aaa68d8.jpg",
            colors: ["White", "Black", "Wood finishes", "Brushed Nickel"],
            sizes: ["S(24-30 in)", "M(36-42 in)", "L(52-60 in)"],
            features: ["Lighting", "Remote control", "Energy efficiency"],
            weight: "10 to 25 lb",
            cardLink: "https://zain1216.github.io/FANOFAN/Product/CEILING%20FAN/ceiling-fan.html"
        },
        {
            title: "Table Fan",
            description: "Versatile Cooling",
            imageUrl: "https://i.pinimg.com/474x/86/a1/bd/86a1bd35e26f0343a5b01597a7614035.jpg",
            colors: ["White", "Blue", "Black"],
            sizes: ["Small", "Medium"],
            features: ["Oscillating", "Quiet operation"],
            weight: "5 to 10 lb",
            cardLink: "https://zain1216.github.io/FANOFAN/Product/STAND%20FAN/table-fan.html"
        },
        {
            title: "Stand Fan",
            description: "Flexible Positioning",
            imageUrl: "https://i.pinimg.com/474x/69/13/5b/69135be66bf711a18d24172e9bf67709.jpg",
            colors: ["White", "Black", "Red"],
            sizes: ["Adjustable<br>height"],
            features: ["Remote control", "3 speed settings"],
            weight: "7 to 12 lb",
            cardLink: "https://zain1216.github.io/FANOFAN/Product/TABLE%20FAN/stand-fan.html"
        },
        {
            title: "Exhaust Fan",
            description: "Pure Ventilation",
            imageUrl: "https://i.pinimg.com/474x/09/0c/18/090c18991a24003418312fa68c464c54.jpg",
            colors: ["White", "Black", "Stainless Steel"],
            sizes: ["Standard", "Large"],
            features: ["High airflow", "Energy efficient"],
            weight: "8 to 15 lb",
            cardLink: "https://zain1216.github.io/FANOFAN/Product/EXHAUST%20fAN/exhaust-fan.html"
        }
    ];

    cardsData.forEach(card => {
        const cardHtml = `
        <div class="wrapper1">
            <div class="container1">
                <div class="top" style="background-image: url(${card.imageUrl});"></div>
                <div class="bottom">
                    <div class="left">
                        <div class="details">
                            <h1 class="cardtxt">${card.title}</h1>
                        <p class="cardp">${card.description}</p>
                        </div>
                        <div class="buy"><i class="fa-solid fa-arrow-right"></i></div>
                    </div>
                    <div class="right">
                        <div class="done"><i class="fa-solid fa-check" style="color: black;"></i></div>
                        <div class="details">

                            <a class="cardbutton" href="${card.cardLink}">
                                <h2 class="cardlik cardbutton1">Discover more</h2>
                                <p class="cardpara">${card.title} →</p>
                            </a>

                        </div>
                        <div class="remove"><i class="fa-solid fa-xmark" style="color: red;"></i></div>
                    </div>
                </div>
            </div>
            <div class="inside">
                <div class="icon"><i class="fa-solid fa-circle-info"></i></div>
                <div class="contents">
                    <ul>
                        <h4>Colors</h4>
                        ${card.colors.map(color => `<li>${color}</li>`).join('')}
                    </ul>
                    <ul>
                        <h4>Size</h4>
                        ${card.sizes.map(size => `<li>${size}</li>`).join('')}
                    </ul>
                    <ul>
                        <h4>Features</h4>
                        ${card.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <ul>
                        <h4>Weight</h4>
                        <li>${card.weight}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        $('.cards-container').append(cardHtml);
    });

    $('.buy').click(function () {
        $(this).closest('.bottom').addClass("clicked");
    });

    $('.remove').click(function () {
        $(this).closest('.bottom').removeClass("clicked");
    });
});
