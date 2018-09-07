import React from 'react';
import PropTypes from 'prop-types';
import ImageClipper from './ImageClipper';

const App = ({visible, ...props}) => {
  return (
    <div>
      {visible ? <ImageClipper {...props} /> : null}
    </div>
  )
}

App.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default App;
