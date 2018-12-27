import React, {Component} from 'react';
import {connect} from 'react-redux';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';

import {getSecretWord} from "./actions";

class WordApp extends Component {
    render(){
        return (
            <div className={'container'}>
                <h1>Word Guessing Thing</h1>
                <Congrats success={this.props.success}/>
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {success, guessedWords, secretWord} = state;
    return {success, guessedWords, secretWord};
};

export default connect(mapStateToProps, {getSecretWord})(WordApp);