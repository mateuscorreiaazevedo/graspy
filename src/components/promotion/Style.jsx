import styled from 'styled-components'

export const CardSection = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1em auto;
    box-shadow: 10px 5px 8px rgba(0,0,0, 0.1);
    border: 1px solid #3498d8;
    border-radius: 8px;
    padding: 1em;
`
export const CardImage = styled.img`
    max-width: 100px;
`
export const CardInfo = styled.div`
    margin: 0 2rem;
`
export const CardTitle = styled.h2`
    font-size: 20px;
`
export const CardPrice = styled.span`
    color: #3498d8;  
    font-size: 26px;
`
export const CardFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
`
export const CardComments = styled.div`
    p {
        color: #ccc;
        font-size: 1em;
        width: 400px;
        font-weight: bold;
    }
    span {
        color: #3498d8;
        font-weight: 600;
        font-size: .9em;
    }
`
export const CardLink = styled.a`
    color: #3498d8;
    cursor: pointer;
    border: 1px solid #3498d8;
    border-radius: 8px;
    padding: .8em 1em;

    transition: all .5s ease;

    &:hover {
        box-shadow: 4px 5px 10px rgba(0,0,0, 0.1);
    }
`
export const ListHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .8em 1em;
    & .list-link {
        text-decoration: none;
        color: #3498d8;
        border: 1px solid #3498d8;
        border-radius: 4px;
        padding: .8em 1em;
        text-transform: uppercase;
        font-weight: bold;
    }
`
export const ListTitle = styled.h1`
    text-transform: uppercase;
    letter-spacing: .05em;
    color: #3498d8;
`
export const SearchContainer = styled.section`
    display: flex;
    justify-content: center;
`
export const SearchInput = styled.input`
    width: 90%;
    padding: .4em 4em;
    border: .0625em solid #3498d8;
    border-radius: .8em;
    height: 3em;
    font-size: 1rem;
    font-style: italic;
    color: #666;
    
    
    &:focus {
        animation: extend-width .8s ease-in-out;
        /* animation: extend-width .8s; */
        outline-color: #3498d8;
    }

    @keyframes extend-width {
        from {
            width: 90%;
        }
        40% {
            width: 100%;
        }
        to {
            width: 90%;
        }

    }
`

export const Loading = styled.div`
    font-size: 2em;
    text-align: center;
    margin: .5em;
    font-weight: bold;
`
