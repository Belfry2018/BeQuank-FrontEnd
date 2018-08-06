import React, { Component } from "react";

class TextCutter extends Component{

    render(){

        const {maxLines, maxLength} = this.props;
        const userText = this.props.children;
        var userLength = userText.length;
        var maxChar = maxLines * maxLength;

        if(maxChar-3 >= userLength){
            return userText;
        }

        else{
            var counter = 0;
            var result = "";
            for(let i=0;i<maxLines;i++){
                if(i === maxLines-1){
                    for(let j=0;j<maxLength-3;j++){
                        result = result + userText.charAt(counter);
                        counter++;
                    }
                }
                else{
                    for(let j=0;j<maxLength;j++){
                        result = result + userText.charAt(counter);
                        counter++;
                    }
                    result = result + "<br/>";
                }
            }

            result = result + "...";
            return  result;
        }

    }
}

export default TextCutter