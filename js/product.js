 let currentProduct = {};
        let quantity = 1;

        function openModal(title, price, image, description) {
            currentProduct = { title, price, image, description };
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalPrice').textContent = price;
            document.getElementById('modalImage').src = image;
            document.getElementById('modalDescription').textContent = description;
            document.getElementById('quantity').textContent = '1';
            quantity = 1;
            document.getElementById('productModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('productModal').style.display = 'none';
        }

        function increaseQuantity() {
            quantity++;
            document.getElementById('quantity').textContent = quantity;
        }

        function decreaseQuantity() {
            if (quantity > 1) {
                quantity--;
                document.getElementById('quantity').textContent = quantity;
            }
        }

        function addToCart() {
            console.log(`Added ${quantity} x ${currentProduct.title} to cart`);
            
            // Show notification
            const notification = document.getElementById('cartNotification');
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
            
            closeModal();
        }

        function addToCartQuick(title, price) {
            console.log(`Added 1 x ${title} to cart`);
            
            // Show notification
            const notification = document.createElement('div');
            notification.className = 'cart-notification';
            notification.innerHTML = `<i class="fa-solid fa-check"></i> ${title} added to cart!`;
            notification.style.position = 'fixed';
            notification.style.top = '20px';
            notification.style.right = '20px';
            notification.style.background = '#4CAF50';
            notification.style.color = 'white';
            notification.style.padding = '15px 25px';
            notification.style.borderRadius = '8px';
            notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            notification.style.zIndex = '2000';
            notification.style.animation = 'slideInRight 0.3s';
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('productModal');
            if (event.target === modal) {
                closeModal();
            }
        }                                                           