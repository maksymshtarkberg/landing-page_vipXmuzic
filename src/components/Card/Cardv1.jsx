import "./styles.css";

const CardOne = ({ cardname, cardimage, crown, phraseStart }) => {
  return (
    <div className="myCard">
      <div className="innerCard">
        <div className="card-icon">
          <img src={crown} alt="crown" />
        </div>
        <div className="frontSide">
          <p className="title">{cardname} </p>
          <p>{phraseStart}</p>

          <img className="card-fun-icon" src={cardimage} alt="cardimage" />
        </div>
        <div className="backSide">
          <p className="title back-title">BACK SIDEFRONT SIDEFRONT SIDE</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
