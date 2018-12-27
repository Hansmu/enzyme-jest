import React, {Component} from 'react';
import {connect} from 'react-redux';
import {guessWord} from "./actions";

export class UnconnectedInput extends Component {
    state = {guessedWord: ''};

    submitGuessedWord = event => {
        event.preventDefault();

        if (this.state.guessedWord && this.state.guessedWord.length > 0) {
            this.props.guessWord(this.state.guessedWord);
        }

        this.setState({guessedWord: ''});
    };

    render() {
        if (this.props.success) {
            return <div data-test="component-input"/>;
        }

      return (
          <div data-test="component-input">
              <form className={'form-inline'}>
                  <input
                      data-test="input-box"
                      value={this.state.guessedWord}
                      onChange={event => this.setState({guessedWord: event.target.value})}
                      className={'mb-2 mx-sm-3'} id={'word-guess'}
                      type={'text'}
                      placeholder={'Enter guess'}
                  />
                  <button data-test="submit-button" type={'submit'} className={'btn btn-primary mb-2'} onClick={this.submitGuessedWord}>
                      Submit
                  </button>
              </form>
          </div>
      );
    };
}

const mapStateToProps = state => ({
    success: state.success
});

export default connect(mapStateToProps, {guessWord})(UnconnectedInput);