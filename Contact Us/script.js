
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get input values
    let inputName = document.getElementById('inputName');
    let inputEmail = document.getElementById('inputEmail');
    let inputPhone = document.getElementById('inputPhone');

    // Validation regex patterns
    let nameRegex = /^[a-zA-Z]{4,12}$/; 
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    let phoneRegex = /^(\+92|0)3[0-9]{9}$/; 

    let isValid = true;

    // Validate name
    if (!nameRegex.test(inputName.value)) {
        document.getElementById('Name-error').innerText = 'Name error: Must be 4-12 letters';
        console.error('Invalid name');
        isValid = false;
    } else {
        document.getElementById('Name-error').innerText = '';
    }

    // Validate email
    if (!emailRegex.test(inputEmail.value)) {
        document.getElementById('Email-error').innerText = 'Email error: Invalid email format';
        console.error('Invalid email');
        isValid = false;
    } else {
        document.getElementById('Email-error').innerText = '';
    }

    // Validate phone number
    if (!phoneRegex.test(inputPhone.value)) {
        document.getElementById('Phone-error').innerText = 'Phone error: Invalid phone format';
        console.error('Invalid phone number');
        isValid = false;
    } else {
        document.getElementById('Phone-error').innerText = '';
    }


    if (isValid) {
        
        document.getElementById('contactFormContainer').style.display = 'none';
        
        document.getElementById('thankYouMessage').style.display = 'block';
    }
});

        const faqItems = document.querySelectorAll('.faq-question');
    
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const parent = item.parentNode;
                parent.classList.toggle('active');
            });
        });
        function toggleChat() {
            const chatBox = document.getElementById('chatBox');
            if (chatBox.style.display === 'none') {
                chatBox.style.display = 'block';
            } else {
                chatBox.style.display = 'none';
            }
        }



        let inputText = document.getElementById('inputText');
        let inputPhone = document.getElementById('inputPhone');
        let inputName = document.getElementById('inputName');
        let inputEmail = document.getElementById('inputEmail');
        
        // Name should be 4 to 12 characters, a-z or A-Z
        let nameRegex = /^[a-zA-Z]{4,12}$/;
        
        // Email validation regex
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        // Phone number regex for formats: 03448193852 or +923448193852
        let phoneRegex = /^(\+92|0)3[0-9]{9}$/;
        
        // Name validation
        inputName.addEventListener('keyup', () => {
            if (nameRegex.test(inputName.value)) {
                console.log('You have entered a correct name');
                document.getElementById('Name-error').innerText = '';
            } else {
                document.getElementById('Name-error').innerText = 'Name error: Must be 4-12 letters';
                console.error('Invalid name');
            }
            console.log(inputName.value);
        });
        
        // Email validation
        inputEmail.addEventListener('keyup', () => {
            if (emailRegex.test(inputEmail.value)) {
                console.log('You have entered a correct email');
                document.getElementById('Email-error').innerText = '';
            } else {
                document.getElementById('Email-error').innerText = 'Email error: Invalid email format';
                console.error('Invalid email');
            }
            console.log(inputEmail.value);
        });
        
        // Phone number validation
        inputPhone.addEventListener('keyup', () => {
            if (phoneRegex.test(inputPhone.value)) {
                console.log('You have entered a correct phone number');
                document.getElementById('Phone-error').innerText = '';
            } else {
                document.getElementById('Phone-error').innerText = 'Phone error: Invalid phone format';
                console.error('Invalid phone number');
            }
            console.log(inputPhone.value);
        });
        