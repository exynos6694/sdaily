import React, { useEffect, useState } from "react";
import '../style/Navbar.css';
import '../style/Card.css';
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
      <p>다음 순환 출발: <strong>{next.sun}</strong> ({next.minutesLeft}분 전)</p>
      <p>다음 전철 출발: <strong>{next.jeon}</strong></p>
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
