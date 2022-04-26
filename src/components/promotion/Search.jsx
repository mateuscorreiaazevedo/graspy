import { SearchInput, SearchContainer } from './Style'

export default function PromotionSearch ({ ...props }) {
  return (
        <SearchContainer>
            <SearchInput {...props} />
        </SearchContainer>
  )
}
