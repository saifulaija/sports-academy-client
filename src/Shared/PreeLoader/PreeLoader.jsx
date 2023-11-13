// LoaderComponent.js

import { BallTriangle } from 'react-loader-spinner';

const PreeLoader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
      />
    </div>
  );
};

export default PreeLoader;
