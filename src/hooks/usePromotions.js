import { useEffect, useState } from "react";
import { promotionService } from "../service/getPromotions";

export const usePromotions = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    promotionService
      .getAll()
      .then((res) => setPromotions(res.data))
      .catch((err) => alert(err.message));
  }, []);

  return {
    promotions
  };
};
