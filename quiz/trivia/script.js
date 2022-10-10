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

  //quarta escolha multipla
  //tratar das corretas
  let correct3 = document.querySelector(".correct3");

  correct3.addEventListener("click", function () {
    correct3.style.backgroundColor = "green";
    document.querySelector("#feedback3").innerHTML = "Correct!";
  });

  //verificar erradas
  let incorrects3 = document.querySelectorAll(".incorrect3");

  for (let i = 0; i < incorrects.length; i++) {
    incorrects3[i].addEventListener("click", function () {
      incorrects3[i].style.backgroundColor = "red";
      document.querySelector("#feedback3").innerHTML = "Incorrect!";
    });
  }

  //quinta escolha multipla
  //tratar das corretas
  let correct4 = document.querySelector(".correct4");

  correct4.addEventListener("click", function () {
    correct4.style.backgroundColor = "green";
    document.querySelector("#feedback4").innerHTML = "Correct!";
  });

  //verificar erradas
  let incorrects4 = document.querySelectorAll(".incorrect4");

  for (let i = 0; i < incorrects.length; i++) {
    incorrects4[i].addEventListener("click", function () {
      incorrects4[i].style.backgroundColor = "red";
      document.querySelector("#feedback4").innerHTML = "Incorrect!";
    });
  }
});
