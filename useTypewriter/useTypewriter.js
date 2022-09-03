const { useState, useEffect } = React;

export function useTypewriter({
  text = "Hello World!",
  direction = "forward",
  repeat = 0,
  speed = 200,
}) {
  // In case user tries to break it
  text = text ?? "Hello World!";

  const textArr = Array.isArray(text) ? text : [text];

  const [message, setMessage] = useState("");
  const [textCount, setTextCount] = useState(0);
  const [repeatCount, setRepeatCount] = useState(repeat);

  let interval;
  let index = 0;

  const type = (str) => {
    interval = setInterval(() => {
      if (index > str.length) {
        clearInterval(interval);
        if (direction === "both") backspace(str);
      } else {
        setMessage(str.slice(0, index));
        index++;
      }
    }, speed);
  };

  const backspace = (str) => {
    interval = setInterval(() => {
      if (index < 0) {
        clearInterval(interval);
        setTextCount((prevCount) => ++prevCount);
      } else {
        setMessage(str.slice(0, index));
        index--;
      }
    }, speed);
  };

  const typingInit = () => {
    if (textCount >= textArr.length) {
      if (repeatCount > 0) setRepeatCount((prev) => prev - 1);
      setTextCount(0);
    } else {
      if (direction === "forward" || direction === "both") {
        type(textArr[textCount]);
      } else if (direction === "backward") {
        backspace(textArr[textCount]);
      }
    }
  };

  useEffect(() => typingInit(), [textCount]);

  return message;
}
