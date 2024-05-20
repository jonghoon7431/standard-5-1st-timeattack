import { useState } from "react";

export default function App() {
  const [calc, setCalc] = useState(0);

  let num = 0;

  const add = (e) => {
    calc + e.target.value;
    // (prev) => prev + calc;
    // setCalc(0);
  };

  let answer = num + Number(calc);
  const reset = () => {
    setCalc(0);
  };
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          value={calc}
          onChange={(event) => {
            setCalc(event.target.value);
          }}
        />{" "}
        만큼을 <button onClick={add}>더할게요</button> <button>뺄게요</button>
        <button onClick={reset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
}
//못하겠습니다,,,,,,
