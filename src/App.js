import React from 'react';

import './index.css';

function App(props) {

  //create components for challenges and JS answers

  function spinWords(str) {
    //code this
  }

  return (
    <div>
      <main role="main" className="App">
        <p>
          Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
        </p>
        <p>
          Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
        </p>
        <code>
          spinWords(str) => ({
            spinWords('Hey fellow warriors')
          })
        </code>
      </main>
    </div>
  );
}

export default App;