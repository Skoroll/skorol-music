import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ClipLoader color="#f6f1f1" loading size={35} />
    </div>
  );
};

export default App;
