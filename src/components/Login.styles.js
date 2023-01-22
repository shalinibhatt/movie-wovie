import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 20px;
color: var(--lightGrey);
background: var(--darkGrey);
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
text-decoration: none;
&:hover {
    transform: scale(1.03);
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
        }
        `;
