import React from 'react';
import styled from 'styled-components';
const StyledComponent = () => {

    const Wrapper = styled.div`
        width: 80%;
        border: 5px solid black;
    `;
    const Heading = styled.h1`
        color: red;
        transition: all 0.5s ease;
        :hover{color: blue;}
        cursor: pointer;
    `;
 
    const LoginButton = styled.button`
        width: 8rem;
        height: 2rem;
        font-size: 1rem;
        transition: all 0.5s ease;
        background-color: ${(props) => props.green ? 'green' : 'orange'};
        :hover{background-color: blue; color: white;}
        `;

    return ( <div>
       <Wrapper>
           <Heading>Header 1-2-3</Heading>
           <LoginButton>Login</LoginButton>
       </Wrapper>
    </div> );
}
 
export default StyledComponent;