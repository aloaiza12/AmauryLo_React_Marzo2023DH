import React from 'react';
import ReactDOM from 'react-dom';
import MusicForm from './MusicForm';

function App() {
  return (
    <div>
      <h1>Music Form</h1>
      <MusicForm />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
