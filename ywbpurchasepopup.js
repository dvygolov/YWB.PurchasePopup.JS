class YwbPopups {
  names = [
    "Kathleen",
    "Peter",
    "Mia",
    "Rachel",
    "Henry",
    "William",
    "Nicole",
    "Charlie",
    "Mary",
    "Ann",
    "Thomas",
    "John",
    "James",
    "Paul",
    "Jorge",
    "Jack",
    "William",
    "Nicole",
    "Charlie",
  ];
  cities = [
    "Auckland",
    "Wellington",
    "Christchurch",
    "Hamilton",
    "Tauranga",
    "Napier-Hastings",
    "Dunedin",
    "Palmerston North",
    "Nelson",
    "Rotorua",
    "Whangarei",
    "New Plymouth",
    "Invercargill",
    "Whanganui",
    "Gisborne",
    "Timaru",
    "Blenheim",
    "Pukekohe",
    "Masterton",
    "Ashburton",
  ];
  minutes = [
    28, 25, 24, 22, 20, 19, 17, 16, 15, 13, 11, 10, 8, 7, 6, 4, 2, 1, 1,
  ];
  productName = "Dell Inspiron";
  productImage = "slider/product1.png";

  dataIndex = 0;
  socialProof;
  socialContent;

  showPopups = true;

  addSocialProofBlock() {
    const socialProof = document.createElement("section");
    socialProof.className = "custom-social-proof";
    socialProof.style.display = "none";
    document.body.appendChild(socialProof);

    const notification = document.createElement("div");
    notification.className = "custom-notification";
    socialProof.appendChild(notification);

    const container = document.createElement("div");
    container.className = "custom-notification-container";
    notification.appendChild(container);

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "custom-notification-image-wrapper";
    container.appendChild(imageWrapper);

    const img = document.createElement("img");
    img.src = this.productImage;
    imageWrapper.appendChild(img);

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "custom-notification-content-wrapper";
    container.appendChild(contentWrapper);

    const content = document.createElement("p");
    content.className = "custom-notification-content";
    contentWrapper.appendChild(content);

    const closeBtn = document.createElement("div");
    closeBtn.className = "custom-close";
    closeBtn.addEventListener("click", function() {
      socialProof.style.display = "none";
    });
    notification.appendChild(closeBtn);
  }

  addStyles() {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "ywbpurchasepopup.css";
    document.head.appendChild(linkElement);
  }

  showPopup() {
    if (!this.showPopups) return;
    this.socialContent.innerHTML = `
      ${this.names[this.dataIndex]} from ${this.cities[this.dataIndex]}<br>
      got a chance to purchase<br>
      <b>${this.productName}</b> for $3.00<br>
      <small>${this.minutes[this.dataIndex]} minutes ago</small>`;
    this.socialProof.style.display = "block";
    this.dataIndex = (this.dataIndex + 1) % this.names.length;
  }

  switchOff() {
    this.showPopups = false;
  }

  getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) * 1000; // Convert to milliseconds
  }

  togglePopup = () => {
    if (this.socialProof.style.display === "block") {
      this.socialProof.style.display = "none";
    } else {
      this.showPopup();
    }
    setTimeout(() => this.togglePopup(), this.getRandomInterval(8, 25)); // Set the next timeout with a random interval
  };

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.addSocialProofBlock();
      this.addStyles();
      this.dataIndex = 0;

      this.socialProof = document.querySelector(".custom-social-proof");
      this.socialContent = document.querySelector(
        ".custom-notification-content",
      );

      setTimeout(() => this.togglePopup(), this.getRandomInterval(1, 5));
    });
  }
}

const ywbPopups = new YwbPopups();
