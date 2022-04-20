import {
  CardSection,
  CardImage,
  CardTitle,
  CardInfo,
  CardPrice,
  CardFooter,
  CardComments,
  CardLink,
} from "./Style";

export default function PromotionCard({ handlePromotions }) {
  return (
    <CardSection>
      <CardImage src={handlePromotions.imageUrl} alt={handlePromotions.title} />
      <CardInfo>
        <CardTitle>{handlePromotions.title}</CardTitle>
        <CardPrice>R${handlePromotions.price}</CardPrice>
        <CardFooter>
          <CardComments>
            {handlePromotions.comments.length > 0 && (
              <p>"{handlePromotions.comments[0].comment}"</p>
            )}
            <span>
              {handlePromotions.comments.length}
              {handlePromotions.comments.length > 1 ? " Comentários" : " Comentário"}
            </span>
          </CardComments>
          <CardLink href={handlePromotions.url}>IR PARA O SITE</CardLink>
        </CardFooter>
      </CardInfo>
    </CardSection>
  );
}
