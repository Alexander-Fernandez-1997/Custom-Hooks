//Version express
function cron(ms, fn) {
  function cb() {
    clearTimeout(timeout);
    timeout = setTimeout(cb, ms);
    fn();
  }
  let timeout = setTimeout(cb, ms);
  return () => {};
}

// Version npm node-cron

const cron = require("node-cron");
cron.schedule("* * * * *", () => {
  log("logs every minute");
});

// Version sin express
function cron(ms, fn) {
  function cb() {
    clearTimeout(timeout);
    timeout = setTimeout(cb, ms);
    fn();
  }
  let timeout = setTimeout(cb, ms);
}
