import React, { Component } from 'react';
import './App.css'

const textValue = "Testilause tässä";

function Letter(props) {
	const item = props.letter;

	return (
		<td><font color={item[0]}>{item[1]}</font></td>
		);
}

function LetterList(props) {
  const letters = props.letterArray;
  return (
    <tr>
      {letters.map((letter) =>
        <Letter letter={letter} />
      )}
    </tr>
  );
}

function ButtonNext(props) {
  if (!props.show || props.show == false) {
    return null;
  } 

  return (
      <div>
      <button name="Seuraava">Seuraava</button>
      </div>
  );
}

function Feedback(props) {
  var text = "";
  if (props.color == "green" && props.letterAmount > 0) {
    text = "Oikein menee!";
  } else if (props.color == "red" && props.letterAmount > 0) {
    text = "Väärin!";
  } else {
    text = "";
  }
  return (
    <div>{text}</div>
    );
}

class TextAreaComp extends Component 
{

  constructor(props) {
    super(props);
    this.state = {
      originalText: textValue,
      value: '',
      color: "green",
      counter: 0,
      letterArray: [],
      showNext: false,
      letterAmount: 0
    };    

    this.handleChange = this.handleChange.bind(this);
  
  }


  handleChange(event) {  

  	var text = event.target.value;
    this.setState({value: text});
 
	  var text1 = String(this.state.value);
	  const text2 = String(this.state.originalText);
    var counter = this.state.counter;

    var letterArray = this.state.letterArray;

    var length1 = text1.length; 
    var length2 = text2.length;

	  if (length1 >= length2-1) {
		  this.setState({showNext: true});
  	} 
    if (length1 > length2) {
      this.setState({color: "red"});
      text1.pop();
      this.setState({value: text1});
      return; // Don't save any new letters
    }

    // Get the last character to compare
    var index = text1.length-1;
    var letter1 = text1.charAt(index); 
    var letter2 = text2.charAt(index);

    // No new letters?
    if (letterArray.length == text1.length) {
      return;
    } 
    // Last letter was deleted?
    if (letterArray.length > text1.length) {
      letterArray.pop();
      this.setState({letterAmount: --letterAmount});
      return;
    }
    var letterAmount = this.state.letterAmount;
    if (letterArray.length < text1.length) {
      this.setState({letterAmount: ++letterAmount});
    }

	  if (letter1 == letter2) {
      this.setState({color: "green"});
		  letterArray.push(['green',letter1]);
	  } else {
      this.setState({color: "red"});
      this.setState({counter: ++counter});
		  letterArray.push(['red', letter1]);
      
	  }
    // lettercolor 
	  this.setState({letterArray: letterArray},() => {
      this.forceUpdate();
    });
    
  }

  render() {

    return (    		
  			<div>
  			{this.state.originalText}
  			<br />
    	 	<input id="writingarea" value={this.state.value} onChange={this.handleChange} />
    	 	<br/><br/>
        <Feedback color={this.state.color} letterAmount={this.state.letterAmount}/>
    	 	<br/>
        <center><table><tbody>
    	 	<LetterList letterArray={this.state.letterArray} />
        </tbody></table>
    	 	</center><br/>
        Virheitä: {this.state.counter} kpl<br/>
    	 	<ButtonNext show={this.state.showNext} />
    	 	</div>
    	);
  }
}

export default TextAreaComp;
