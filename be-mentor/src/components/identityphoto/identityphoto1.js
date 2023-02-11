import React from 'react';
import PI1 from './photos/pi1.png';
import PI2 from './photos/pi2.png';
import PI3 from './photos/pi3.png';

const Pt1 = () => {
  return (
    <div className="P1">
      <img src={PI1} alt="P1" className="pi1" />
    </div>
  );
};

const Pt2 = () => {
  return (
    <div className="PI2">
      <img src={PI2} alt="PI2" className="pi2" />
    </div>
  );
};

const Pt3 = () => {
  return (
    <div className="PI3">
      <img src={PI3} alt="" className="pi"/>
    </div>
  );
};

export {Pt1, Pt2, Pt3 };

