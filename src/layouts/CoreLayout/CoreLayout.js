import React, { PropTypes } from 'react';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import { StickyContainer } from 'react-sticky';
import 'layouts/CoreLayout/CoreLayout.scss';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout({ children }) {
  return (
    <StickyContainer className='page-container'>
      <Navbar />
      <Header />
      <div className='view-container'>
        {children}
      </div>
    </StickyContainer>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element
};

export default CoreLayout;
