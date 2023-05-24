import "./styles.css";

const CardOne = () => {
  return (
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <p className="title">FRONT SIDE</p>
          <p>Hover Me</p>
        </div>
        <div className="backSide">
          <p className="title">BACK SIDE</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
