const emailInput = document.querySelector("input[type=email]");
const ageInput = document.querySelector("input[type=number]");
const commentInput = document.querySelector("input[type=text]");
const driversLicenseCheckboxInput = document.querySelector("input[type=checkbox]");
const makeSelect = document.querySelector("#make");

document.querySelector("#someForm").addEventListener("submit", handleSubmit);
driversLicenseCheckboxInput.addEventListener("change", handleCheckboxChange);

function handleSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  const age = ageInput.value;
  const comment = commentInput.value;
  const driversLicense = driversLicenseCheckboxInput.checked;
  const make = makeSelect.value;

  const values = {
    email,
    age,
    comment,
    hasDrivesLicense: driversLicense,
    make,
  };

  console.log(values);
}

function handleCheckboxChange(event) {
  const isChecked = event.target.checked;
  if (isChecked) {
    makeSelect.classList.remove("hidden");
  } else {
    makeSelect.classList.add("hidden");
  }
}
