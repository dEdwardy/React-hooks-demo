//获取dom 或者保存变量

import { useRef, useState } from "react";

function Example08(){
  const [text,setText] = useState('')
  const inputEle = useRef(null);
  const onButtonClick = () => {
    inputEle.current.value = 'ghello';
    console.log(inputEle)
  }
  return (
    <>
      <input ref={inputEle} type="text" />
      <button onClick = { onButtonClick }>在input上展示文字</button>
      <input value ={text} onChange ={ e => setText(e.target.value) }/>
    </>
  )
}
export default Example08;