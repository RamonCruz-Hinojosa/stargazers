const Currentastro = (props) => {
  return (
    <>
      <form onSubmit={props.handleAstro}>
        <label>
          City or Zip Code:
          <input type="text" name="city" />
        </label>
        <button>search</button>
      </form>
      <p>Check some cool astronomy stuff</p>
      <ul>
        <li>Phase: {props.astro?.astronomy?.astro?.moon_phase}</li>
        <li>Moonrise: {props.astro?.astronomy?.astro?.moonrise}</li>
        <li>Moonset: {props.astro?.astronomy?.astro?.moonset}</li>
        <li>Sunrise: {props.astro?.astronomy?.astro?.sunrise}</li>
        <li>Sunset: {props.astro?.astronomy?.astro?.sunset}</li>
      </ul>
    </>
  );
};

export default Currentastro;
