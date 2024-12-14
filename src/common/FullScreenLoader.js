import React from 'react';

const FullScreenLoader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      zIndex: 9999,
    }}>
      <div style={{
        position: 'relative',
        width: '40px',
        height: '40px',
      }}>
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: '12px',
              height: '12px',
              backgroundColor: '#0078D4',
              borderRadius: '50%',
              animation: `windowsLoaderFade 1.2s linear ${index * 0.15}s infinite`,
              top: index < 3 || index > 5 ? '0' : 'auto',
              bottom: index > 2 && index < 6 ? '0' : 'auto',
              left: index < 2 || index > 6 ? '0' : 'auto',
              right: index > 1 && index < 5 ? '0' : 'auto',
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes windowsLoaderFade {
          0% { opacity: 0.85; }
          50% { opacity: 0.25; }
          100% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
};

export default FullScreenLoader;