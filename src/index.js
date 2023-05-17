const init = () => {
    
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("input#searchByID");

    console.log(event);

    // fetch("http://localhost:3000/movies")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     // LOG: (3) [{…}, {…}, {…}]

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        title.innerText = data.title;
         summary.innerText = data.summary;
      });
  });

}

document.addEventListener('DOMContentLoaded', init);