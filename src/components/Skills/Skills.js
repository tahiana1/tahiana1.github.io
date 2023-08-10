import GaugeChart from "react-gauge-chart";

export default function Skills(props) {
  const skills = [
    {
      title: "HTML5/ CSS3",
      value: 0.8,
      colors: ["#edd718", "#ce5435", "#254bdd"],
    },
    {
      title: "JavaScript",
      value: 0.8,
      colors: ["#FF5F6D", "#edd718"],
    },
    {
      title: "ReactJS",
      value: 0.9,
      colors: ["#fff", "#1b74ba"],
    },
    {
      title: "Redux",
      value: 0.8,
      colors: ["#7046b5", "#FFC371"],
    },
    {
      title: "VueJS",
      value: 0.7,
      colors: ["#70a761", "#FFC371"],
    },
    {
      title: "Webpack",
      value: 0.8,
      colors: ["#8acef2", "#1b74ba"],
    },
  ];

  const Chart = (props) => {
    return (
      <div className='chart-container'>
        <GaugeChart
          id={props.title || "gauge-chart"}
          nrOfLevels={10}
          colors={props.colors || ["#FF5F6D", "#FFC371"]}
          arcWidth={0.1}
          percent={props.value || 0.8}
          hideText
          animDelay={1000}
          animateDuration={5000}
          needleColor='#D1B745'
          needleBaseColor='#D1B745'
        />
        <p className='g-text'>{`${props.title || ""} [${
          props.value * 10
        }/10]`}</p>
      </div>
    );
  };

  return (
    <div className='App-skills px-1 py-1' id='skills'>
      <h2 className="animate-banner">Skills</h2>
      <p className='sub-text animate-start'>
        Primarily, I like developing ReactJS Apps and enjoy tuning performances
        for web-apps in general. Find below the skills, tools and technologies I
        use, to bring products to life:
      </p>
      <h3 className='info-text'>Check Out Skills &#8594;</h3>
      <div className='chart-parent'>
        {skills.map((skill) => (
          <Chart key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
}
