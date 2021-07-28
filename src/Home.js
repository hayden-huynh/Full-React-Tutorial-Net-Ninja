const Home = () => {
  // By default, event handling function automatically receives an Event object as its first parameter
  const handleClick = (e) => {
    console.log("Hello ninjas", e);
  };

  const handleClickAgain = (name, e) => {
    console.log(`Hello ${name}`, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>

      {/* Usage of anonymous function to avoid calling the named function immediately */}
      {/* Anonymous function automatically receives the Event object as first parameter */}
      <button
        onClick={(e) => {
          handleClickAgain("Mario", e);
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
