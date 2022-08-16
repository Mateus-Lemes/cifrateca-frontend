import styled from "styled-components";

const InputDisable = styled.input`
    width: 299px;
    height: 52px;
    opacity: 0.7;
    background: #f2f2f2;
    color: #AFAFAF;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    margin-bottom: 16px;
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

export default InputDisable