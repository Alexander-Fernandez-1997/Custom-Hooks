const UseTranslator = () => {
  var translator = document.getElementById("translator");
  translator.addEventListener("click", function () {
    var text = document.body.innerHTML;
    var url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=" +
      encodeURI(text);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        var response = JSON.parse(xhr.responseText);
        var translatedText = response[0];
        console.log(translatedText);
        var translatedText = translatedText.map(function (item) {
          return item[0];
        });
        translatedText = translatedText.join("");
        document.body.innerHTML = translatedText;
      }
    };
    xhr.send();
  });
};
