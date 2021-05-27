// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//Assign button
const assignButton = document.querySelector(".assign");
//Dish assigned list
const assignedItems = document.querySelector(".assigned-items");

//event listener for when invite button is clicked
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput(); //call clearInput function after guest is added
  }
});

//clear input box after clicking invite button
const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  let potluckItems = [
    "cheese",
    "crackers",
    "fresh fruit",
    "coleslaw",
    "apple cake",
    "gazpacho",
    "baguette",
    "egg salad",
    "potato salad",
    "summer rolls",
    "hummus",
    "cookies"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItems = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} will bring ${randomPotluckItems}`; //guest.innerText is to grab 1 list value
    //if only guest is used then it will grab whole list instead of the text
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
