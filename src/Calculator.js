import React,{useState} from 'react'


export default function Calculator(props) {
    let buttonArray=["C",1,2,"+",3,4,5,"-",6,7,8,"*",9,0,".","/","="]

    let[calVal,setcalVel]=useState("")


    function onButtonClick(item){
      console.log(item)
      if(item==="C"){
        setcalVel("")

      }else if(item==="="){
        const result=eval(calVal)
        setcalVel(result)

      }else{
        let nerwValue=calVal + item
        setcalVel(nerwValue)

      }
    }
  return (
    
    <div className='calculator'>
     
        <input className='display' type='text' value={calVal}/>
        <div className='buttonContainer'>
           {
            buttonArray.map((item)=>
            <button key={item} onClick={()=>onButtonClick(item)}>{item} </button>
           
            )
           }

        </div>
      
    </div>
  )
}
