import React from 'react';

const ButtonPanel = (props) => (
  <>
    <button onClick={props.prev}>Prev</button>
    <button onClick={props.next}>Next</button>
  </>
)

export default ButtonPanel;