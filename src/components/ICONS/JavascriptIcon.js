import React, { useEffect, useState } from 'react';
/* eslint-disable camelcase */

function JavascriptIcon() {
  const [size, setSize] = useState(50);
  const max_size = 50;
  const min_size = 40;
  const speed = 1000; // change speed here

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) => {
        if (prevSize === max_size) {
          return min_size;
        }
        return max_size;
      });
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundColor: '#323330',
      width: '60px',
      height: '60px',
      borderRadius: '10%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden', // added to prevent image getting out of the box
    }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/SVG/javascript.svg`}
        alt="Sass"
        style={{ width: `${size}px`, height: `${size}px`, transition: `${speed / 1000}s all` }}
      />
    </div>
  );
}
export default JavascriptIcon;
