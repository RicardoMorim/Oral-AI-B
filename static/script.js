$(".menu a").click(function (e) {
  e.preventDefault();

  var obj = "img." + $(this).attr("ref");

  $("html, body").animate(
    {
      scrollTop: $(obj).offset().top,
    },
    1200
  );
});

const results = Splitting();
results[0].el.insertBefore(
  document.createElement("span"),
  results[0].el.children[0]
);
results[0].el.appendChild(document.createElement("span"));

document.getElementById("rotate").onclick = function () {
  document.querySelectorAll("#main_div div").forEach(function (el) {
    el.className = "rotate";
  });
};

//ANIMAÇÃO DOS DIVS COM O SCROLL
new WOW().init(); //plugin do github: https://github.com/matthieua/WOW
