const Currentweather = (props) => {
  return (
    <>
      <h2>Search here to check weather conditions/astronomy events.</h2>
      <form onSubmit={props.handleSubmit}>
        <label>
          City or Zip Code:
          <input type="text" name="city" />
        </label>
        <button>search</button>
      </form>
      <p>Current weather conditions</p>
      <ul>
        <li>Current temp: {props.weather?.current?.temp_f}°f</li>
        <li>Feels like: {props.weather?.current?.feelslike_f}°f</li>
        <li>Condition: {props.weather?.current?.condition?.text}</li>
      </ul>
    </>
  );
};

export default Currentweather;
