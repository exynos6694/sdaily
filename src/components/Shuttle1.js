import React, { useEffect, useState } from "react";
import '../style/Navbar.css';
import '../style/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const schedule = [
  { jeon: "09:49", sun: "x" },
  { jeon: "10:16", sun: "x" },
  { jeon: "10:36", sun: "x" },

  { jeon: "11:00", sun: "10:50" },
  { jeon: "11:29", sun: "11:19" },
  { jeon: "12:00", sun: "11:50" },
  { jeon: "12:28", sun: "12:18" },
  { jeon: "12:53", sun: "12:43" },
  { jeon: "13:16", sun: "13:06" },
  { jeon: "13:37", sun: "13:27" },
  { jeon: "13:58", sun: "11:48" },
  { jeon: "14:21", sun: "14:11" },
  { jeon: "14:48", sun: "14:38" },
  { jeon: "15:00", sun: "14:50" },
  { jeon: "15:51", sun: "15:41" },
  { jeon: "16:39", sun: "16:29" },
  { jeon: "16:55", sun: "16:45" },
  { jeon: "17:33", sun: "17:23" },
  { jeon: "18:12", sun: "18:03" },
  { jeon: "18:27", sun: "18:17" },
  { jeon: "18:56", sun: "18:46" },
  { jeon: "19:20", sun: "19:10" },
  { jeon: "19:46", sun: "19:36" },
  { jeon: "20:19", sun: "20:09" },
  { jeon: "20:35", sun: "20:25" },
  { jeon: "21:06", sun: "20:56" },
  { jeon: "21:39", sun: "21:34" },
  { jeon: "22:03", sun: "21:53" },
  { jeon: "22:14", sun: "x" },
  { jeon: "22:42", sun: "x" },
  { jeon: "23:17", sun: "x" },
  { jeon: "23:45(천안)", sun: "x" },


  
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
    return <div className="">주말 시간표 준비중...</div>;
  }

  if (!next) {
    return <div className="">오늘 운행이 종료되었습니다.</div>;
  }

  return (
    <div className="">
      <h2 className="section-title">하교(광운대 방향)</h2>
      <p>다음 직행(신창역) 출발: <strong>{next.sun}</strong> ({next.minutesLeft}분 전)</p>
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
