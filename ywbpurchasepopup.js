document.addEventListener("DOMContentLoaded", function() {

  const names = ['Mr.X', 'Mr.Me', 'Mr.Someone'];
  const cities = ['Kiev', 'Moscow', 'Belgrad'];
  const minutes = [10, 30, 50];
  const productName = "Artropant";
  const productImage = "product.png";

  addSocialProofBlock(productImage);
  addStyles();

  let dataIndex = 0;

  var socialProof = document.querySelector('.custom-social-proof');
  var content = document.querySelector('.custom-notification-content');

  function showPopup(names, cities, minutes, productName) {
    content.innerHTML = `${names[dataIndex]} - ${cities[dataIndex]}<br>Purchased <b>${productName}</b><small>${minutes[dataIndex]} minutes ago</small>`;
    socialProof.style.display = "block";
    dataIndex = (dataIndex + 1) % names.length;
  }

  function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) * 1000; // Convert to milliseconds
  }

  function togglePopup() {
    if (socialProof.style.display === "block") {
      socialProof.style.display = "none";
    } else {
      showPopup(names, cities, minutes, productName);
    }
    setTimeout(togglePopup, getRandomInterval(8, 25)); // Set the next timeout with a random interval
  }

  setTimeout(togglePopup, getRandomInterval(1, 5));

});


function addStyles(){
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = "ywbpurchasepopup.css";
  document.head.appendChild(linkElement);
}

// Dynamically create the custom-social-proof section
function addSocialProofBlock(productImage){
  const socialProof = document.createElement('section');
  socialProof.className = 'custom-social-proof';
  socialProof.style.display = 'none';
  document.body.appendChild(socialProof);

  const notification = document.createElement('div');
  notification.className = 'custom-notification';
  socialProof.appendChild(notification);

  const container = document.createElement('div');
  container.className = 'custom-notification-container';
  notification.appendChild(container);

  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'custom-notification-image-wrapper';
  container.appendChild(imageWrapper);

  const img = document.createElement('img');
  img.src = productImage;
  imageWrapper.appendChild(img);

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'custom-notification-content-wrapper';
  container.appendChild(contentWrapper);

  const content = document.createElement('p');
  content.className = 'custom-notification-content';
  contentWrapper.appendChild(content);

  const closeBtn = document.createElement('div');
  closeBtn.className = 'custom-close';
  closeBtn.addEventListener("click", function() {
    socialProof.style.display = "none";
  });
  notification.appendChild(closeBtn);
}
