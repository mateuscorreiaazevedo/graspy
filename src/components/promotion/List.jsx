import PromotionCard from "./Card";
import { usePromotions } from "../../hooks/usePromotions";
import { Link } from "react-router-dom";
import { ListHeader, ListTitle } from "./Style";

export default function PromotionList() {
  const { promotions } = usePromotions();

  return (
    <div>
      <ListHeader>
        <ListTitle>Promoshow</ListTitle>
        <Link to="/create" className="list-link">Nova Promoção!</Link>
      </ListHeader>
      {promotions.map((promotion) => {
        return (
          <PromotionCard handlePromotions={promotion} key={promotion.id} />
        );
      })}
    </div>
  );
}
