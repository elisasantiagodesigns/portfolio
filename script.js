// script.js file

// Function to open the modal and load the project images
//function openModal(projectName) {
    //const modal = document.getElementById("modal");
   // const modalContent = document.getElementById("modal-content");

    // Clear any existing content
    //modalContent.innerHTML = '';

    // Load images for the clicked project
   // const projectFolder = projectName;

    // Fetch all images for the project folder
   // const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add more images as needed

   // images.forEach(image => {
    //    const imgElement = document.createElement("img");
  //      imgElement.src = `${projectFolder}/${image}`;
   //     imgElement.alt = `${projectName} Image`;
    //    modalContent.appendChild(imgElement);
  //  });

    // Show the modal
  //  modal.style.display = "block";
//}

// Function to close the modal
//function closeModal() {
   // const modal = document.getElementById("modal");
  //  modal.style.display = "none";
//}

document.addEventListener('DOMContentLoaded', function() {
    // Your existing JavaScript code here
    function openModal(projectName) {
        const modal = document.getElementById("modal");
        const modalContent = document.getElementById("modal-content");

        if (!modal || !modalContent) {
            console.error("Modal or modal-content element not found!");
            return;
        }

        // Clear any existing content
        modalContent.innerHTML = '';

        // Load images for the clicked project
        const projectFolder = projectName;

        const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with actual images
        images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = `${projectFolder}/${image}`;
            imgElement.alt = `${projectName} Image`;
            modalContent.appendChild(imgElement);
        });

        // Show the modal
        modal.style.display = "block";
    }

    function closeModal() {
        const modal = document.getElementById("modal");
        if (modal) modal.style.display = "none";
    }
});

//lightbox//
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = lightbox.querySelector(".lightbox-content");
  const close = lightbox.querySelector(".close");

  // Add click event to each image
  const images = document.querySelectorAll(".lightbox-image");
  images.forEach((image) => {
      image.addEventListener("click", () => {
          const largeImageSrc = image.getAttribute("data-large");
          lightboxImage.src = largeImageSrc;
          lightbox.style.display = "flex"; // Show the lightbox
      });
  });

  // Close lightbox when clicking on the "X" or outside the image
  close.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImage.src = ""; // Clear the image source
  });

  lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
          lightbox.style.display = "none";
          lightboxImage.src = ""; // Clear the image source
      }
  });
});

