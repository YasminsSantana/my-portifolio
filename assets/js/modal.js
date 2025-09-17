// image modal logic
document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById("imageModal");

    // Check if the modal exists on the page before adding listeners
    if (modal) {
        const modalImg = document.getElementById("modalImage");
        const closeBtn = document.querySelector(".close-button");
        const galleryImages = document.querySelectorAll(".gallery-item img");

        // Assign click event to each gallery image to open the modal
        galleryImages.forEach(img => {
            img.onclick = function() {
                modal.style.display = "flex";
                modalImg.src = this.src;
                document.body.style.overflow = 'hidden'; // Prevents background scrolling
            }
        });
        
        // Function to close the modal
        const closeModal = function() {
            modal.style.display = "none";
            document.body.style.overflow = 'auto'; // Re-enables background scrolling
        }

        // Close the modal when the 'x' is clicked
        closeBtn.onclick = closeModal;

        // Close the modal when the user clicks on the background
        modal.onclick = function(event) {
            if (event.target === modal) { // Ensures the click is on the background itself
                closeModal();
            }
        }
        
        // Close the modal when the 'Escape' key is pressed
        window.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === "flex") {
                closeModal();
            }
        });
    }
});