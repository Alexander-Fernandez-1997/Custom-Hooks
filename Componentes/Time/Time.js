import { useEffect, useState } from "react";

export function Time() {
  // State
  const [now, setNow] = useState(new Date());

  // Update time
  function tick() {
    setNow(new Date());
  }
  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return <p className="time-element">{now.toLocaleTimeString()}</p>;
}

// Es un reloj con la hora actual que se actualiza cada segundo, para cambiar el estilo se modifica time-element.
