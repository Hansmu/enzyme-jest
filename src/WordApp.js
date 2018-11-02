import React, {Component} from 'react';
import {connect} from 'react-redux';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class WordApp extends Component {
    render(){
        return (
            <div className={'container'}>
                <h1>Word Guessing Thing</h1>
                <Congrats success={false}/>
                <GuessedWords guessedWords={[]}/>
            </div>
        );
    }
}

export default WordApp;