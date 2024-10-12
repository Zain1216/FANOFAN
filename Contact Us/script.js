
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            document.getElementById('contactFormContainer').style.display = 'none';
            
            document.getElementById('thankYouMessage').style.display = 'block';
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
        
    