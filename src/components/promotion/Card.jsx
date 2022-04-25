import {
  CardSection,
  CardImage,
  CardTitle,
  CardInfo,
  CardPrice,
  CardFooter,
  CardComments,
  CardLink
} from './Style'
import PropTypes from 'prop-types'

PromotionCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  url: PropTypes.string
}

export default function PromotionCard (props) {
  const { imageUrl, title, price, comments, url } = props
  return (
    <CardSection>
      <CardImage src={imageUrl} alt={title} />
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardPrice>R${price}</CardPrice>
        <CardFooter>
          <CardComments>
            {comments.length > 0 && (
              <p>"{comments[0].comment}"</p>
            )}
            <span>
              {comments.length}
              {comments.length > 1 ? ' Comentários' : ' Comentário'}
            </span>
          </CardComments>
          {!!url && (
            <CardLink href={url}>IR PARA O SITE</CardLink>
          )}
        </CardFooter>
      </CardInfo>
    </CardSection>
  )
}
