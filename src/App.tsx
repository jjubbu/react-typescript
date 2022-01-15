import { setDefaultResultOrder } from 'dns/promises';
import React from 'react';
import Button from './elements/Button';
function App() {
  let list = [...Array(9)].map((l,i)=>String(i+1));
  list.unshift('0');
  list.unshift('00');
  list.unshift('.');

  const math = ['+','-','*','%','/']

  const [number, setNumber] = React.useState<string>('')

  const numberClick = (num:string,type:string) => {
    const len = number.length;
    console.log(number[len-1])
    if (type === 'math' && (number.length === 0 || math.includes(number[len-1]))){
      alert('숫자를 입력해주세요.')
    }else{
      setNumber(prev=>prev+num)
    }
  }

  const enterClick = () => {
    let result = eval(number);
    alert(result)
  }

    return (
        <div className="App">
            <h3>정말정말 간단한 계산기</h3>
            <p>result : {number}</p>
            {list.map((l,i)=>{
              return <button key={i} onClick={()=>{numberClick(l,'number')}}>{l}</button>
            })}
            <br/>
            {math.map((l,i)=>{
              return <button key={i} onClick={()=>{numberClick(l,'math')}}>{l}</button>
            })}
            <br/>
            <button onClick={enterClick}>enter</button>
        </div>
    );
}

export default App;
