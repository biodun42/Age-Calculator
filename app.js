const birthdayInput = document.getElementById("birthday");
const result = document.getElementById("result");

function ageResult() {
  const birthdayValue = birthdayInput.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    result.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age = age - 1;
  }
  return age;
}



function reset() {
  birthdayInput.value = "";
  result.innerText = "";
};
