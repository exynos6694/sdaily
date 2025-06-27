import React, { useEffect, useState } from "react";
import '../style/Navbar.css';
import '../style/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const schedule = [
  { jeon: "7:49", sun: "7:54" },
  { jeon: "8:26", sun: "8:31" },
  { jeon: "8:45", sun: "8:50" },
  { jeon: "9:24", sun: "9:29" },
  { jeon: "9:56", sun: "10:01" },
  { jeon: "10:17", sun: "10:22" },
  { jeon: "10:43", sun: "10:48" },
  { jeon: "11:07", sun: "11:12" },
  { jeon: "11:37", sun: "11:42" },
  { jeon: "11:52", sun: "11:57" },
];

function getNextDeparture(schedule) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();



  for (let entry of schedule) {
    const [jeonHour, jeonMin] = entry.jeon.split(":").map(Number);
    const jeonTime = jeonHour * 60 + jeonMin;

    if (jeonTime > nowMinutes) {
      return entry;
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
    const interval = setInterval(update, 60000); // 1분마다 갱신
    return () => clearInterval(interval);
  }, []);

  if (!next) {
    return <div>오늘 운행이 종료되었습니다.</div>;
  }

  return (
    <div>
      <h2 class="section-title">신창 방면</h2>
      <p>다음 순환 출발시간: {next.sun}</p>
      <p>다음 전철 도착시간: {next.jeon}</p>
      
    </div>
  );
}
