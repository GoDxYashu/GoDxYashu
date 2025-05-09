const products = {
    "Motherboards": [
      { name: "H81", price: "₹1400" },
      { name: "H61", price: "₹1200" },
      { name: "H41", price: "₹1000" },
      { name: "B450", price: "₹2500" },
      { name: "Z490", price: "₹4000" },
      { name: "X570", price: "₹7500" },
      { name: "B550", price: "₹3500" }
    ],
    "PC RAM": [
      { name: "DDR3 4GB", price: "₹900" },
      { name: "DDR3 8GB", price: "₹1700" },
      { name: "DDR4 8GB", price: "₹1900" },
      { name: "DDR4 16GB", price: "₹3400" },
      { name: "DDR4 32GB", price: "₹5900" }
    ],
    "Laptop RAM": [
      { name: "DDR3L 4GB", price: "₹600" },
      { name: "DDR4 8GB", price: "₹1300" },
      { name: "DDR4 16GB", price: "₹2700" }
    ],
    "SMPS": [
      { name: "450W", price: "₹800" },
      { name: "550W", price: "₹1000" },
      { name: "650W", price: "₹1500" },
      { name: "750W", price: "₹2000" },
      { name: "850W", price: "₹2500" }
    ],
    "Cabinets": [
      { name: "Gaming Case A", price: "₹1500" },
      { name: "RGB Tower", price: "₹2200" },
      { name: "Mid Tower", price: "₹2400" },
      { name: "Full Tower", price: "₹3500" }
    ],
    "Graphics Cards": [
      { name: "GTX 1050 Ti", price: "₹8500" },
      { name: "RTX 3060", price: "₹26000" },
      { name: "RTX 3080", price: "₹51000" },
      { name: "GTX 1660 Super", price: "₹16000" },
      { name: "RTX 3070", price: "₹46000" }
    ],
    "Hard Drives": [
      { name: "1TB HDD", price: "₹4500" },
      { name: "500GB SSD", price: "₹4500" },
      { name: "1TB SSD", price: "₹8500" },
      { name: "2TB HDD", price: "₹6500" },
      { name: "2TB SSD", price: "₹16000" }
    ],
    "Processors": [
      { name: "Intel i3 10th Gen", price: "₹8500" },
      { name: "Intel i5 10th Gen", price: "₹16000" },
      { name: "Intel i7 10th Gen", price: "₹23000" },
      { name: "AMD Ryzen 5", price: "₹19000" },
      { name: "AMD Ryzen 7", price: "₹27000" }
    ],
    "Cooling Systems": [
      { name: "Cooler Master Hyper 212", price: "₹3500" },
      { name: "Corsair H100i", price: "₹6500" },
      { name: "Noctua NH-D15", price: "₹11000" }
    ],
    "Monitors": [
      { name: "Acer 24inch", price: "₹8500" },
      { name: "Dell 27inch", price: "₹16000" },
      { name: "Samsung 32inch", price: "₹26000" }
    ]
  };
  
  const container = document.getElementById("product-container");
  
  for (const category in products) {
    products[category].forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-name">${category}: ${product.name}</div>
        <div class="product-price">${product.price}</div>
      `;
      container.appendChild(card);
    });
  }
  