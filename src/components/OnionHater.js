import React from 'react';

class OnionHater extends React.Component {
  constructor(props){
    super(props)
    this.inputtext=this.inputtext.bind(this);
  }
  inputtext(event){
    if(event.currentTarget.value.toLowerCase().includes('cebolla')){
      event.currentTarget.classList.toggle('colorOdio');
    }else{
        event.currentTarget.classList.toggle('colorNoOdio');
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
