// src/pages/Energy.js
import React from 'react';
import MainContent from '../components/MainContent';

const Energy = () => {
  return (
    <MainContent
      modelName="Solar Roof"
      apr="2.5%"
      leasePrice="$199"
      imageUrl="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Solar-Roof.jpg"
      extraInfo={[
        "Tesla's Solar Roof powers your home with clean energy, combining solar tiles with powerful aesthetics.",
        "Get energy savings and enjoy a beautiful roof that lasts for decades with warranty."
      ]}
    />
  );
};

export default Energy;
