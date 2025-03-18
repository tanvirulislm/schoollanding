const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


// document.addEventListener("DOMContentLoaded", function () {
//   const fadeIns = document.querySelectorAll(".fade-in");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//         observer.unobserve(entry.target);
//       }
//     });
//   });

//   fadeIns.forEach((fadeIn) => {
//     observer.observe(fadeIn);
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const monthlyButton = document.getElementById('monthly');
//   const yearlyButton = document.getElementById('yearly');
//   const prices = document.querySelectorAll('.price span:first-child');

//   monthlyButton.addEventListener('click', () => {
//       monthlyButton.classList.add('active');
//       yearlyButton.classList.remove('active');
//       prices[0].textContent = '$9';
//       prices[1].textContent = '$29';
//       prices[2].textContent = '$99';
//   });

//   yearlyButton.addEventListener('click', () => {
//       yearlyButton.classList.add('active');
//       monthlyButton.classList.remove('active');
//       prices[0].textContent = '$7'; // 20% off $9
//       prices[1].textContent = '$23'; // 20% off $29
//       prices[2].textContent = '$79'; // 20% off $99
//   });
// });


 // Toggle between monthly and yearly billing
//  const toggle = document.getElementById('billing-toggle');
//  const monthlyLabel = document.getElementById('monthly-label');
//  const yearlyLabel = document.getElementById('yearly-label');
//  const basicPrice = document.getElementById('basic-price');
//  const proPrice = document.getElementById('pro-price');
//  const enterprisePrice = document.getElementById('enterprise-price');

//  // Price data
//  const prices = {
//    monthly: {
//      basic: 9,
//      pro: 29,
//      enterprise: 99
//    },
//    yearly: {
//      basic: Math.round(9 * 12 * 0.8),
//      pro: Math.round(29 * 12 * 0.8),
//      enterprise: Math.round(99 * 12 * 0.8)
//    }
//  };

//  // Set initial state
//  let isYearly = false;

//  toggle.addEventListener('change', function() {
//    isYearly = this.checked;
   
//    // Update labels
//    if (isYearly) {
//      monthlyLabel.classList.remove('text-gray-700');
//      monthlyLabel.classList.add('text-gray-500');
//      yearlyLabel.classList.remove('text-gray-500');
//      yearlyLabel.classList.add('text-gray-700');
//    } else {
//      monthlyLabel.classList.remove('text-gray-500');
//      monthlyLabel.classList.add('text-gray-700');
//      yearlyLabel.classList.remove('text-gray-700');
//      yearlyLabel.classList.add('text-gray-500');
//    }
   
//    // Update prices with a simple animation
//    animatePrice(basicPrice, isYearly ? prices.yearly.basic : prices.monthly.basic);
//    animatePrice(proPrice, isYearly ? prices.yearly.pro : prices.monthly.pro);
//    animatePrice(enterprisePrice, isYearly ? prices.yearly.enterprise : prices.monthly.enterprise);
//  });

//  function animatePrice(element, newPrice) {
//    const currentPrice = parseInt(element.textContent.replace('$', ''));
//    const diff = newPrice - currentPrice;
//    const steps = 20;
//    const increment = diff / steps;
//    let step = 0;
   
//    const interval = setInterval(() => {
//      step++;
//      const intermediatePrice = Math.round(currentPrice + (increment * step));
//      element.textContent = '$' + intermediatePrice;
     
//      if (step >= steps) {
//        element.textContent = '$' + newPrice;
//        clearInterval(interval);
//      }
//    }, 20);
//  }

const monthlyOption = document.getElementById('monthly-option');
    const yearlyOption = document.getElementById('yearly-option');
    const toggleSlider = document.getElementById('toggle-slider');
    const priceDisplay = document.getElementById('price-display');
    
    let isYearly = false;
    
    monthlyOption.addEventListener('click', () => {
      if (isYearly) {
        isYearly = false;
        toggleSlider.classList.remove('yearly');
        monthlyOption.classList.add('active');
        yearlyOption.classList.remove('active');
        priceDisplay.textContent = 'Current plan: Monthly';
      }
    });
    
    yearlyOption.addEventListener('click', () => {
      if (!isYearly) {
        isYearly = true;
        toggleSlider.classList.add('yearly');
        monthlyOption.classList.remove('active');
        yearlyOption.classList.add('active');
        priceDisplay.textContent = 'Current plan: Yearly (20% off)';
      }
    });