import React from 'react';
import loaderSrc from '../../assets/loading.gif';
import './index.css'
const Loader = props => (
    <div>
        <img
          className="loading-icon"
          alt="loader icon"
          src={loaderSrc} />
    </div>
);

export default Loader;