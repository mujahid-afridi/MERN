let container = document.querySelector(".card-cont");
let addNewNote = document.querySelector(".addNew-inner-cont");
let allTextAreaTag;
let allEditBtn;
let dataFromLS;
let againDataFromLS;

let countTotalCard = 0;
//data that stored in LS
let cardId = 0;
let text = "";

let createNewCard = (countTotalCard, container) => {
  let div = document.createElement("div");
  div.classList.add("card");
  div.id = countTotalCard;
  div.innerHTML += `<div class="icon-cont">
              <i class="fa-solid fa-pen-to-square editBtn"></i>
              <i class="fa-solid fa-trash deleteBtn"></i>
            </div>
            <textarea type='text' placeholder="Can add something here.." maxlength="2000" wrap="soft"></textarea>`;
  container.appendChild(div);
};

dataFromLS = JSON.parse(localStorage.getItem("dataFromLS")) || [];
if (dataFromLS.length != 0) {
  countTotalCard = 0;
  for (let card of dataFromLS) {
    countTotalCard++;
    let div = document.createElement("div");
    div.classList.add("card");
    div.id = countTotalCard;
    div.innerHTML += `<div class="icon-cont">
              <i class="fa-solid fa-pen-to-square editBtn"></i>
              <i class="fa-solid fa-trash deleteBtn"></i>
            </div>
            <textarea type='text'  disabled placeholder="Can add something here.." maxlength="2000" wrap="soft">${card.value}</textarea>`;
    container.appendChild(div);
  }
  dataFromLS.forEach((item, index, array) => {
    item.cardId = index + 1;
  });
  localStorage.setItem("dataFromLS", JSON.stringify(dataFromLS));
}

if (document.querySelectorAll("textarea").length != 0) {
  allTextAreaTag = document.querySelectorAll("textarea");
} else {
  allTextAreaTag = [];
}

addNewNote.addEventListener("click", () => {
  countTotalCard++;
  createNewCard(countTotalCard, container);
  allTextAreaTag = document.querySelectorAll("textarea");
  allTextAreaTag.forEach((textarea) => {
    textarea.disabled = true;
  });

  clickEventAllTextarea();
});

let clickEventAllTextarea = () => {
  allTextAreaTag.forEach((textArea) => {
    textArea.addEventListener("input", (e) => {
      e.stopPropagation();
      cardId = e.target.parentElement.id;
      text = e.target.value;
      dataFromLS[cardId - 1] = { cardId: cardId, value: text };
      let storeDataIntoLs = dataFromLS.filter((obj) => {
        if (obj != null && obj.value.trim() != "") {
          return obj;
        }
      });
      localStorage.setItem("dataFromLS", JSON.stringify(storeDataIntoLs));
    });
  });
};
clickEventAllTextarea();

let editBtnClick = () => {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("editBtn")) {
      allTextAreaTag.forEach((textarea) => {
        textarea.disabled = true;
      });
      e.target.closest(".card").querySelector("textarea").disabled = false;
    }
  });
};
editBtnClick();

let deleteBtnClick = () => {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
      let x = e.target.closest(".card");
      let y = x.id - 1;
      console.log("cardId = " + y);
      x.remove();
      dataFromLS.splice(y, 1);
      let count = 0;
      againDataFromLS = dataFromLS.filter((item, index, array) => {
        if (item.value.trim != "") {
          count++;
          return (array[index].cardId = count);
        }
      });
      console.log("again get Data from LS  ", againDataFromLS);
      console.log("DeleteBtn clicked = ", dataFromLS);
      localStorage.setItem("dataFromLS", JSON.stringify(againDataFromLS));

      dataFromLS = JSON.parse(localStorage.getItem("dataFromLS")) || [];
      container.innerHTML = "";
      countTotalCard = 0;
      for (let card of dataFromLS) {
        countTotalCard++;
        let div = document.createElement("div");
        div.classList.add("card");
        div.id = countTotalCard;
        div.innerHTML += `<div class="icon-cont">
              <i class="fa-solid fa-pen-to-square editBtn"></i>
              <i class="fa-solid fa-trash deleteBtn"></i>
            </div>
            <textarea type='text'  disabled placeholder="Can add something here.." maxlength="2000" wrap="soft">${card.value}</textarea>`;
        container.appendChild(div);
      }
    }
  });
};
deleteBtnClick();