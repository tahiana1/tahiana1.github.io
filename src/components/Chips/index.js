// function which returns chips component
export default function Chips(props) {
  return (
    <div className='chips'>
      {props.chipsData.map((chip, index) => {
        return (
          <div className='chip' key={index}>
            <span>{chip}</span>
          </div>
        );
      })}
    </div>
  );
}
