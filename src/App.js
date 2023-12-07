import React, {useEffect, useState} from 'react';

const Timer = () =>{
const [otp , setOTP] = useState("");
const [minutes, setMinutes] = useState(1);
const [seconds, setSeconds] = useState(59);

const resendOTP =() =>{
    setMinutes(1);
    setSeconds(59);
}
   
useEffect(() => {
  //let intervalId;
  const interval = setInterval (()=>
  {
      // decrease second if more than 0
      if (seconds > 0)
      {
          setSeconds(seconds -1);
      }
      if (seconds === 0)
      {
          if(minutes === 0)
          {
              clearInterval(interval);
          }
      
          else{
          setSeconds(59);
          setMinutes(minutes -1);
        }
        }
    },1000);

  return() =>
  {
      clearInterval(interval);
  };
},[seconds]);

return(
    <div className = "container">
        <div className = "card">
            <h4>Verify OTP</h4>
            <input placeholder="Enter OTP" value={otp} 
            onChange={({target}) =>{
            setOTP(target.value);
            }}
            />

    <div className="countdownText">
        {seconds > 0 || minutes > 0 ?(
             <p>
                Time Remaining:{""}
                <span style={{fontWeight:600}}>
                    {minutes < 10 ? `0${minutes}`: minutes}:
                    {seconds < 10 ? `0${seconds}`: seconds}
                </span>
             </p>):
             (
                <p>Didn't recieve the code</p>
             )}
          
           <button disabled = {seconds > 0 || minutes > 0}
           style={{color: seconds > 0 || minutes > 0 ? "#DFE3E8": "#FF5630",
        }}
           onClick = {resendOTP}>  Resend OTP</button>

           <button className="submit-btn">Submit</button>
       </div> 
       </div>
       </div>);
}

export default Timer;