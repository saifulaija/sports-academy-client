

// const Loader = () => {
//   return (
//     <div className="flex justify-center  items-center h-screen">
//       <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-700"></div>
//     </div>
//   );
// };

// export default Loader;


// LoaderComponent.js

import {  Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      <Bars
  height="40"
  width="40"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  );
};

export default Loader;

