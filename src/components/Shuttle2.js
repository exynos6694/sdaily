import React, { useEffect, useState } from "react";
import '../style/Navbar.css';
import '../style/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const schedule = [
  { jeon: "7:49", sun: "7:54" },
  { jeon: "8:24", sun: "8:29" },
  { jeon: "8:45", sun: "8:50" },
  { jeon: "9:24", sun: "9:29" },
  { jeon: "9:56", sun: "10:01" },
  { jeon: "10:16", sun: "10:21" },
  { jeon: "10:43", sun: "10:48" },
  { jeon: "11:07", sun: "11:12" },
  { jeon: "11:37", sun: "11:42" },
  { jeon: "11:52", sun: "11:57" },
  { jeon: "12:23", sun: "12:28" },
  { jeon: "12:52", sun: "13:57" },
  { jeon: "13:24", sun: "13:29" },
  { jeon: "13:38", sun: "13:43" },
  { jeon: "13:53", sun: "13:58" },
  { jeon: "14:21", sun: "14:26" },
  { jeon: "14:34", sun: "14:39" },
  { jeon: "15:23", sun: "15:28" },
  { jeon: "16:11", sun: "16:16" },
  { jeon: "16:30", sun: "16:35" },
  { jeon: "17:10", sun: "17:15" },
  { jeon: "17:57", sun: "18:02" },
  { jeon: "18:10", sun: "18:15" },
  { jeon: "18:43", sun: "18:48" },
  { jeon: "19:05", sun: "19:10" },
  { jeon: "19:22", sun: "19:25" },
  { jeon: "19:42", sun: "19:47" },
  { jeon: "20:13", sun: "20:18" },
  { jeon: "20:48", sun: "20:53" },
  { jeon: "21:06", sun: "21:11" },
  { jeon: "21:34", sun: "21:39" },
  { jeon: "21:47", sun: "21:52" },

];

function getNextDeparture(schedule) {
  const now = new Date();
  const nowSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  for (let entry of schedule) {
    const [hour, minute] = entry.sun.split(":").map(Number);
    const targetSeconds = hour * 3600 + minute * 60;

    if (targetSeconds > nowSeconds) {
      const diff = targetSeconds - nowSeconds;
      const minutesLeft = Math.floor(diff / 60);
      const secondsLeft = diff % 60;
      return { ...entry, minutesLeft, secondsLeft };
    }
  }

  return null;
}

export default function NextDeparture() {
  const [next, setNext] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const update = () => {
      setNext(getNextDeparture(schedule));
    };

    update();
    const interval = setInterval(update, 1000); // 초 단위 갱신
    return () => clearInterval(interval);
  }, []);

  const today = new Date().getDay();
  if (today === 0 || today === 6) {
    return <div className="">오늘은 운행하지 않습니다.</div>;
  }

  if (!next) {
    return <div className="">오늘 운행이 종료되었습니다.</div>;
  }

  return (
    <div className="">
      <h2 className="section-title">등교(신창)</h2>
      <p>전철 도착: <strong>{next.jeon}</strong></p>
      <p>순환 출발: <strong>{next.sun}</strong></p>
      <button
        className="btn btn-light-purple mt-3"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "▲ 시간표 닫기" : "▼ 전체 시간표 보기"}
      </button>

      <div className={`slide-container ${showAll ? "slide-open" : "slide-closed"}`}>
      <table className="table table-bordered mt-3 text-center">
        <thead className="table-light">
          <tr>
            <th>전철 출발</th>
            <th>순환 출발</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, i) => (
            <tr key={i}>
              <td>{entry.jeon}</td>
              <td>{entry.sun}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </div>
  );
}
