const results = Splitting();
results[0].el.insertBefore(document.createElement("span"), results[0].el.children[0]);
results[0].el.appendChild(document.createElement("span"));

