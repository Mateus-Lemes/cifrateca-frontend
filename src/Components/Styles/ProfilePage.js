import styled from "styled-components";

export const ProfilePageStyled = styled.div`
    width: 90vw;
    height: 100%;

    img {
        background-color: lightgray;
        width: 100px;
    }

    h2 {
        padding-left: 10px;
    }

    nav {
        width: 100vw;
        

        select {
            border: none;
            border-radius: 5px;
            &::placeholder {
                width: 280px;
                height: 25px;
                font-weight: 400;
                font-size: 14px;
                line-height: 25px;
                color: #7E7E7E;
    }
            &:focus{
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
            }
        }
    }
`