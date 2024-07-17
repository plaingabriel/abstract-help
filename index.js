const forms = document.querySelectorAll(".search-form");

forms.forEach((form) => {
  const search = form.querySelector(".search-form__input");

  search.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.target.value = "";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
