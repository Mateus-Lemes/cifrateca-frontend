import styled from "styled-components";

const Input = styled.input`
    width: 299px;
    height: 52px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 19px;
    font-weight: 400;
    padding-left: 11px;

    &::placeholder {
        width: 280px;
        height: 25px;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
        color: #7E7E7E;
    }
    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`

export default Input