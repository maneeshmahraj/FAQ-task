


import React, { useEffect, useState } from 'react'

const FAQitems = ({faq,index}) => {
       const [isShow,setIsShow]=useState(false);



       const handleClick=()=>{
        setIsShow((isShow)=>!isShow);
       }
       useEffect(()=>{
        if(index==0)
            {
                setIsShow(true);
            }
       },[])
  return (
    <>
   
    <div className='faq-box'>
       <div className='qes' onClick={handleClick}>
       <button className={isShow&&'arrow'}>{'>'}</button>
       <div >{faq.question}</div>
       </div>
      {
        isShow&& <div className='ans'>{faq.answer}</div>
      }
    </div>
  
    </>
  )
}

export default FAQitems