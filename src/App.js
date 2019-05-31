import React from 'react';
import './App.css';

function App() {
  return (
    <div className="homePage">
      <span className="homePageAlignment"><p className="homePageTitle">Welcome to Last Call</p></span>
      <p className="homePageAlignment">Netflix is a movie streaming service, which acquires and loses the rights to movies and TV shows on a regular basis. As content is added and removed, Netflix releases a quartly statement which predicts when content will be leaving the site. Here you are able to see a list of what is on said list and when it will be officially removed from the Netflix website.</p>
      <p>Due to Netflix's policies regarding the use of their data, we are unable to connect our application to their databse. This means you will have to enter your watch list manually!</p>
      <p>We also cannot check your watch list with what Netflix currently has the rights to, meaning it is up to you to keep your watch list updated!</p> 
    </div>
  );
}

export default App;
