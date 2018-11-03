import React, {Component} from 'react';
import {connect} from 'react-redux';

class Input extends Component {
    render() {
        if (this.props.success) {
            return <div data-test="component-input"/>;
        }

      return (
          <div data-test="component-input">
              <form className={'form-inline'}>
                  <input data-test="input-box" className={'mb-2 mx-sm-3'} id={'word-guess'} type={'text'} placeholder={'Enter guess'}/>
                  <button data-test="submit-button" type={'submit'} className={'btn btn-primary mb-2'}>
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

export default connect(mapStateToProps)(Input);