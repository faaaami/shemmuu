import axios from 'axios'
import React, { useState } from 'react'


const ReviewPage = () => {
    const [feedBack,Setfeedback]=useState("")
    function save(){
        axios.post("http://localhost:5000/reviews",
            {text : feedBack,

            }
        )
        Setfeedback("")
    }
  return (
    <div>
      <input type="text"
      onChange={(e)=>Setfeedback(e.target.value)}
      value={feedBack}
      placeholder='feedback' />
      <button onClick={save}>submit</button>
    </div>
  )
}

export default ReviewPage
