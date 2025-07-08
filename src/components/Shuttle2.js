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
      <h2 className="section-title">광운대 방면</h2>
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
