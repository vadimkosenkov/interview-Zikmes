import "./style.scss";
const form = document.querySelector(".header__form");
const orderWrap = document.querySelector(".header__order-wrap");
const input = document.querySelector(".header__input-wrap input");
let data;

form.addEventListener("submit", (e) => formValidation(e));
input.addEventListener("input", () => {
  changeData(input.value);
  if (data) {
    orderWrap.classList.remove("header__order-wrap_disabled");
  } else {
    orderWrap.classList.add("header__order-wrap_disabled");
  }
});

const fetchPostForm = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      id: Date.now(),
      body: data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => alert(`Заказ оформлен на номер: ${json.body}`));
  input.value = "";
  orderWrap.classList.add("header__order-wrap_disabled");
};

const changeData = (value) => {
  data = value;
};

const formValidation = (e) => {
  fetchPostForm();
  e.preventDefault();
};
