import React from 'react';

function fetchData() {
  fetch('/api/hello')
  .then(response => response.json())
  .then(data => console.log(data))
}

const Home = () => {
  return (
    <div>
      <h1>
        Bienvenido al backend de quiz App
      </h1>
    </div>
  )
}

export default Home
