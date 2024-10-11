import React, { useState } from 'react';
import AnalisisSituacionContent from './AnalisisSituacionContent';
import AnalisisSituacionActivity from './AnalisisSituacionActivity';


const AnalisisSituacion: React.FC = ( ) => {
  const [showActivity, setShowActivity] = useState(false);

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8">

      {!showActivity ? (
        <AnalisisSituacionContent onStartActivity={() => setShowActivity(true)} />
      ) : (
        <AnalisisSituacionActivity onBackToContent={() => setShowActivity(false)} />
      )}
    </div>
  );
};

export default AnalisisSituacion;