import styled from "styled-components"

export const CardSection = styled.section `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em auto;
    box-shadow: 10px 5px 8px rgba(0,0,0, 0.1);
    border: 1px solid #3498d8;
    border-radius: 8px;
    padding: 1em;
`
export const CardImage = styled.img `
    max-width: 100px;
`
export const CardInfo = styled.div `
    margin: 0 2rem;
    align-self: flex-end;
`
export const CardTitle = styled.h2 `
    font-size: 20px;
`
export const CardPrice = styled.span `
    color: #3498d8;  
    font-size: 26px;
`
export const CardFooter = styled.footer `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
`
export const CardComments = styled.div `
    p {
        color: #ccc;
        font-size: 1.4em;
    }
    span {
        color: #3498d8;
        font-weight: 600;
    }
`
export const CardLink = styled.a `
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
export const ListHeader = styled.header `
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
export const ListTitle = styled.h1 `
    text-transform: uppercase;
    letter-spacing: .05em;
    color: #3498d8;
`