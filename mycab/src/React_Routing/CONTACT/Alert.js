import React from 'react'

const Alert = (props) => {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alertm && <div className='my-3' role="alert">
           <strong>{capitalize(props.alertm.type)}</strong> {props.alertm.msg} 
        </div>
  )
}

export default Alert