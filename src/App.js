import React  from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';


function App() {
  let name = 'Worm';
  let buttons = [
    {color: 'primary'},
  ];

  function addTask(){
    let newText = prompt('What task would you like to add?');
    let card = document.createElement('div');
    card.className = 'card h-100';
  
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
  
    let cardTitle = document.createElement('h5');
    cardTitle.innerHTML = newText;
    cardTitle.className = 'card-title';
  
    cardBody.append(cardTitle);
    card.append(cardBody);
  
    let col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3 my-3';
    col.append(card);
  
    let taskDisplay = document.getElementById('taskDisplay');
    taskDisplay.append(col);
  
    return card;
  }
  
  // let actionB = document.getElementById('actionButton');
  // actionB.addEventListener('click', function() {
  //   addTask();
  // });
  

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
          {buttons.map(button => <Button color={button.color} handleClick={addTask}/> )}
      </div>
    </div>

  );
}

export default App;
