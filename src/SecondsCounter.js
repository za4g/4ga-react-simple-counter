export default function SecondsCounter({ seconds }) {
  let digitString = seconds.toString();
  console.log("digitString");
  console.log(digitString);

  let digitsArray = digitString.split("");
  console.log("digitsArray");
  console.log(digitsArray);

  //Initialize divs with value of 0
  const divTimer = [
    <div className="time-box">0</div>,
    <div className="time-box">0</div>,
    <div className="time-box">0</div>,
    <div className="time-box">0</div>,
    <div className="time-box">0</div>,
    <div className="time-box">0</div>,
  ];

  //Replacing the divTimer with individual digits from the end
  for (let i = 6 - digitsArray.length; i < 6; i++) {
    divTimer[i] = <div className="time-box">{digitsArray[i - 2]}</div>;
  }

  return (
    <div className="click-container">
      <div className="clock-box">
        <i className="fa-regular fa-clock"></i>
      </div>
      {divTimer}
    </div>
  );
}
