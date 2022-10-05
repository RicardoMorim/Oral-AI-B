document.addEventListener("DOMContentLoaded", function () {
  //fazer com que o script apenas comece quando a pagina for carregada
  //primeira escolha multipla
  //tratar das corretas
  let correct = document.querySelector(".correct");

  correct.addEventListener("click", function () {
    correct.style.backgroundColor = "green";
    document.querySelector("#feedback").innerHTML = "Correct!";
  });

  //verificar erradas
  let incorrects = document.querySelectorAll(".incorrect");

  for (let i = 0; i < incorrects.length; i++) {
    incorrects[i].addEventListener("click", function () {
      incorrects[i].style.backgroundColor = "red";
      document.querySelector("#feedback").innerHTML = "Incorrect!";
    });
  }

  //segunda escolha multipla
  //tratar das corretas
  let correct1 = document.querySelector(".correct1");

  correct1.addEventListener("click", function () {
    correct1.style.backgroundColor = "green";
    document.querySelector("#feedback1").innerHTML = "Correct!";
  });

  //verificar erradas
  let incorrects1 = document.querySelectorAll(".incorrect1");

  for (let i = 0; i < incorrects.length; i++) {
    incorrects1[i].addEventListener("click", function () {
      incorrects1[i].style.backgroundColor = "red";
      document.querySelector("#feedback1").innerHTML = "Incorrect!";
    });
  }

  //terceira escolha multipla
  //tratar das corretas
  let correct2 = document.querySelector(".correct2");

  correct2.addEventListener("click", function () {
    correct2.style.backgroundColor = "green";
    document.querySelector("#feedback2").innerHTML = "Correct!";
  });

  //verificar erradas
  let incorrects2 = document.querySelectorAll(".incorrect2");

  for (let i = 0; i < incorrects.length; i++) {
    incorrects2[i].addEventListener("click", function () {
      incorrects2[i].style.backgroundColor = "red";
      document.querySelector("#feedback2").innerHTML = "Incorrect!";
    });
  }

  document.querySelector(".sub").addEventListener("click", function () {
    let answer = document.querySelector(".answer");

    answer.value == "Assembly" || answer.value == "assembly" || answer.value == "Assemble" || answer.value == "assemble"
      ? (document.querySelector("#feedbackans").innerHTML = "Correct!")
      : (document.querySelector("#feedbackans").innerHTML = "Incorrect!");
      answer.value == "Assembly" || answer.value == "assembly" || answer.value == "Assemble" || answer.value == "assemble"
      ? (answer.style.backgroundColor = "green")
      : (answer.style.backgroundColor = "red");
  });
});
