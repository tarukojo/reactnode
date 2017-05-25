import React, { Component } from 'react';
import './App.css'

const textArray = ["Testilause tässä", "Toinen lause", "Hirmusen vaikea lause"];

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
    <div>
    {text}
    </div>
    );
}

class TextAreaComp extends Component 
{

  constructor(props) {
    super(props);
    this.state = {
      originalText: textArray[0],
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

  	var text1 = event.target.value;
    this.setState({value: text1});

	  const text2 = String(this.state.originalText);

    var length1 = text1.length; 
    var length2 = text2.length;

    var arrayLetters = [];
    var newColor = "green";
    var counterVal = 0;

    for (var i=0; i < text1.length && i < text2.length; i++) {
       if (text1.charAt(i) == text2.charAt(i)) {
          arrayLetters.push(['green',text1.charAt(i)]);          
       } else {
          arrayLetters.push(['red',text1.charAt(i)]);
          newColor = "red";
          ++counterVal;
       }
    }
    if (text1.length > text2.length) {
      for (var j = text2.length-1; j < text1.length; j++) {
         arrayLetters.push(['red', text1.charAt(j)]);
         newColor = "red";
          ++counterVal;
      }
    }

    // Text completed?
    if (length1 >= length2 && newColor == "green") {
      this.setState({showNext: true});
    } 

    this.setState({color: newColor})
    this.setState({letterAmount: text1.length});
    this.setState({counter: counterVal});
    this.setState({letterArray: arrayLetters});
  }


  render() {

    return (    		
  			<div className="writingexercise">
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
