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

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('productModal');
            if (event.target === modal) {
                closeModal();
            }
        }                                                           