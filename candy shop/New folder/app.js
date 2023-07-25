class Smoothie {
  constructor(customerName, smoothieType, size, toppings) {
    this.customerName = customerName;
    this.smoothieType = smoothieType;
    this.size = size;
    this.toppings = toppings;
  }

  getDescription() {
    const toppingsList = this.toppings.length > 0 ? this.toppings.join(", ") : "none";
    return `${this.customerName}'s ${this.size} ${this.smoothieType} Smoothie with ${toppingsList}.`;
  }
}

document.getElementById("smoothieForm").onsubmit = function(event) {
  event.preventDefault();
  const smoothie = createSmoothieObject();
  const smoothieObj = new Smoothie(
    smoothie.customerName,
    smoothie.smoothieType,
    smoothie.size,
    smoothie.toppings
  );
  presentSmoothie(smoothieObj);
};

function createSmoothieObject() {
  const customerName = document.getElementById("customerName").value;
  const smoothieType = document.getElementById("smoothieType").value;
  const size = document.querySelector('input[name="size"]:checked').value;

  const toppings = [];
  const checkboxes = document.querySelectorAll('input[name="toppings"]:checked');
  checkboxes.forEach((checkbox) => toppings.push(checkbox.value));

  return {
    customerName: customerName,
    smoothieType: smoothieType,
    size: size,
    toppings: toppings,
  };
}

function presentSmoothie(smoothie) {
  const smoothieDescription = smoothie.getDescription();
  const smoothieOutputDiv = document.getElementById("smoothieDescription");
  smoothieOutputDiv.innerHTML = `<p><strong>Smoothie Order:</strong><br>${smoothieDescription}</p>`;
}