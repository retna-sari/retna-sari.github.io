import React from 'react';
import ReactDOM from 'react-dom';
import { LazyFoxInputBox } from '../@module-inputs/input-box/index.lazyfox-input-box';
import { LazyFoxSelectBox } from '../@module-inputs/select-box/index.lazyfox-select-box';
import { OwnIcon } from '../@icons/module-icons';


class HelloWorld extends React.Component{
  render(){
    return(
      <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center',  padding: '50px', backgroundColor:'#fff'}}>
        <LazyFoxInputBox type = {"password"} isError = {true} onChange = {(e) => console.log(e)} onSubmit = {(e) => console.log(e)} />
        <LazyFoxSelectBox isError data={ ['halloe','olla']}/>
        <div>
        <OwnIcon.IconDownload />
        </div>
      </div>
    )
  }
}

export default HelloWorld;
