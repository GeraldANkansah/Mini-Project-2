import React, { useState } from 'react';

function Demo() {
  const [num, setNum] = useState('');
  const [binaryOutput, setBinaryOutput] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const convert = () => {
    if (!isNaN(num) && num !== '') {
      setBinaryOutput(`Binary value: ${parseInt(num, 10).toString(2)}`);
      setShowContent(true);
      setShowSignup(true);
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Convert your number!</h1>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter number"
        style={styles.input}
      />
      <button onClick={convert} style={styles.button}>Convert</button>

      {showContent && (
        <div style={styles.hiddenContent}>
          <p>{binaryOutput}</p>
        </div>
      )}

      {showSignup && (
        <div style={styles.hiddenContent2}>
          <p>Sign up to get the rest of the conversions!</p>
        </div>
      )}
    </div>
  );
}


const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    width: '400px',
    margin: 'auto',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
  },
  hiddenContent: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: 'turquoise',
    borderRadius: '5px',
    textAlign: 'center',
  },
  hiddenContent2: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: 'rgb(245, 65, 95)',
    borderRadius: '5px',
    textAlign: 'center',
  }
};

export default Demo;
