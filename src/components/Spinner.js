import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
  );
};

export default Spinner;
