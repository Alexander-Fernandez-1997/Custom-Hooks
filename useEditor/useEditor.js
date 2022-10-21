export const useEditor = () => {
  const edit = document.createElement("div");
  (edit.style.position = "fixed"),
    (edit.style.top = "30%"),
    (edit.style.right = 0),
    (edit.style.width = "50px"),
    (edit.style.height = "50px"),
    (edit.style.backgroundImage =
      "url(data:image/jpeg;base64,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)"),
    (edit.style.backgroundColor = "white"),
    (edit.style.backgroundSize = "cover"),
    (edit.style.backgroundPosition = "center"),
    (edit.style.backgroundRepeat = "no-repeat"),
    (edit.style.borderRadius = "50%"),
    (edit.style.cursor = "pointer"),
    (edit.style.zIndex = 1e3),
    document.body.appendChild(edit);
  const save = document.createElement("div");
  (save.style.position = "fixed"),
    (save.style.top = "40%"),
    (save.style.right = "0"),
    (save.style.width = "50px"),
    (save.style.height = "50px"),
    (save.style.backgroundImage =
      "url(https://www.iconbunny.com/icons/media/catalog/product/6/0/604.12-save-icon-iconbunny.jpg)"),
    (save.style.backgroundColor = "white"),
    (save.style.backgroundSize = "cover"),
    (save.style.backgroundPosition = "center"),
    (save.style.backgroundRepeat = "no-repeat"),
    (save.style.borderRadius = "50%"),
    (save.style.cursor = "pointer"),
    (save.style.zIndex = 1e3),
    document.body.appendChild(save);
  const stop = document.createElement("div");
  (stop.style.position = "fixed"),
    (stop.style.top = "30%"),
    (stop.style.right = "0"),
    (stop.style.width = "50px"),
    (stop.style.height = "50px"),
    (stop.style.backgroundImage =
      "url(data:image/png;base64,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)"),
    (stop.style.backgroundColor = "white"),
    (stop.style.backgroundSize = "cover"),
    (stop.style.backgroundPosition = "center"),
    (stop.style.backgroundRepeat = "no-repeat"),
    (stop.style.borderRadius = "50%"),
    (stop.style.cursor = "pointer"),
    (stop.style.zIndex = 1e3),
    (stop.style.display = "none"),
    document.body.appendChild(stop),
    edit.addEventListener("click", function () {
      (document.designMode = "on"),
        (edit.style.display = "none"),
        (stop.style.display = "block");
    }),
    stop.addEventListener("click", function () {
      (document.designMode = "off"),
        (stop.style.display = "none"),
        (edit.style.display = "block");
    }),
    save.addEventListener("click", function () {
      let A = document.documentElement.innerHTML,
        e = new Blob([A], { type: "text/html" }),
        t = URL.createObjectURL(e),
        d = document.createElement("a");
      (d.download = "index.html"), (d.href = t), d.click(), d.remove();
    });
};
