// Content.js
import React from 'react';

const SinglePage = ({ children, title }) => {
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3"> {title} </h1>
        <div className="row">
          <div className="col-12">              
            { children }
          </div>
        </div>
      </div>
    </main>
  );
};

export default SinglePage;

export const withPageLayout = (WrappedComponent, title) => {
  return (props) => (
    <SinglePage title={title}>
      <WrappedComponent {...props} />
    </SinglePage>
  );
};
