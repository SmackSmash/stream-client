import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamEdit extends Component {
  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <label htmlFor="test">Test Field</label>
          <Field name="test" id="test" component="input" />
        </div>
        <div>
          <label htmlFor="test2">Test Field 2</label>
          <Field name="test2" id="test2" component="input" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'testForm' })(StreamEdit);
