import React, { useEffect, useState } from "react";
import '../style/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const schedule = [
  { jeon: "12:28", sun: "12:03" },
  { jeon: "12:53", sun: "12:28" },
  { jeon: "13:16", sun: "12:51" },
  { jeon: "13:37", sun: "13:12" },
  { jeon: "13:58", sun: "13:33" },
  { jeon: "14:21", sun: "13:56" },
  { jeon: "14:48", sun: "14:23" },
  { jeon: "15:00", sun: "14:35" },
  { jeon: "15:51", sun: "15:26" },
  { jeon: "16:39", sun: "16:14" },
  { jeon: "16:55", sun: "16:30" },
  { jeon: "17:33", sun: "17:08" },
  { jeon: "18:12", sun: "17:47" },
];
  
function getNextDeparture(schedule) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (let entry of schedule) {
    const [jeonHour, jeonMin] = entry.sun.split(":").map(Number);
    const jeonTime = jeonHour * 60 + jeonMin;


    if (jeonTime > nowMinutes) {
      const minutesLeft = jeonTime - nowMinutes;
      return { ...entry, minutesLeft };
    }
  }
  return null;
}


export default function NextDeparture() {
  const [next, setNext] = useState(null);

  useEffect(() => {
    const update = () => {
      setNext(getNextDeparture(schedule));
    };

    update();
    const interval = setInterval(update, 1000); // 1분마다 갱신
    return () => clearInterval(interval);
  }, []);
  
  if (new Date().getDay()===6 || new Date().getDay()===0) {
    return <div>오늘은 운행하지 않습니다.</div>;
  }
  else if (!next) {
    return <div>오늘 운행이 종료되었습니다.</div>;
  }


  return (
    <div>
      <h2 class="section-title">광운대 방면</h2>
      <p>다음 순환 출발시간: {next.sun} &nbsp;&nbsp;&nbsp;&nbsp;{next.minutesLeft}분 전</p>
      <p>다음 전철 출발시간: {next.jeon}</p>
      
    </div>
  );
}
