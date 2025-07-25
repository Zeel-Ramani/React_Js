import React from 'react';

const Counter = () => {

    const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Counter App</h1>      
       <div style={{ textAlign: 'center', marginTop: '50px' , backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{color: '#333', fontSize: '55px'}}>{count}</h2>
        <button onClick={() => setCount(count + 1)}>
        Increase
        </button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)} style={{ margin: '10px' }}>
        Decrease
        </button>
        <button onClick={() => setCount(0)}>
        Reset
        </button>
        </div>
    </div>
  );
}

export default Counter;