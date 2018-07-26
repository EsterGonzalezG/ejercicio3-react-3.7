import React from 'react';

class OnionHater extends React.Component {
  constructor(props){
    super(props)
    this.inputtext=this.inputtext.bind(this);
  }
  inputtext(event){
    if(  event.currentTarget.classList.contains('colorNoOdio')){
      event.currentTarget.classList.remove('colorNoOdio');
    }else{
      event.currentTarget.classList.remove('colorOdio');
    }
    if(event.currentTarget.value.toLowerCase().includes('cebolla')){
      event.currentTarget.classList.add('colorOdio');
    }else{
        event.currentTarget.classList.add('colorNoOdio');
    }
    this.forceUpdate();
  }
  render(){
    return (
      <textarea className="input_cebolla" onKeyUp={this.inputtext}>

      </textarea>
    );
  }
}

export default OnionHater;
