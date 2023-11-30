import Card from "../card/Card"
import "./card-list.styles.css";

const CardList = ({monsters}) => {
  return (
    <div className="card-list">
      {monsters.map((v) => {
        return <Card key={v.id} monster={v} />;
      })}
    </div>
  );
}

export default CardList