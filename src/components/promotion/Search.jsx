import { SearchInput, SearchContainer } from './Style'

export default function PromotionSearch ({ ...props }) {
  return (
        <SearchContainer>
            <SearchInput
                type="search"
                placeholder="Buscar"
                {...props}
            />
        </SearchContainer>
  )
}
