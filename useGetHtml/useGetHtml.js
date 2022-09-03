export const useGetHtml = (url) => {
  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      var div = document.createElement("div");
      div.innerHTML = html;
      document.body.appendChild(div);
    });
};
