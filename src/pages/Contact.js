import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours';
import Wrapper from '../resources/styles/wrapper';


const ContactPageStyle = styled.div`
  background-color: ${colour.lightGray};
  padding: 25rem 0;
  margin-top: -20vh;
`

// const Row = styled.div`
//   max-width: 68rem;
//   background-color: ${colour.white};
//   margin: 0 auto;

//   &:not(:last-child) {
//     margin-bottom: 8rem;
//   }

//   ::after {
//     content: "";
//     display: table;
//     clear: both;
//   }

//   //! select all the class attributes starting with 'col-'
//   [class^="col-"] {
//     float: left;

//     &:not(:last-child) {
//       margin-right: 6rem;
//     }
//   }

//   .col-1-of-2 {
//     width: calc((100% - 6rem) / 2);
//   }

//   .col-1-of-3 {
//     width: calc((100% - 2 * 6rem) / 3);
//   }

//   .col-2-of-3 {
//     width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem);
//   }

//   .col-1-of-4 {
//     width: calc((100% - 3 * 6rem) / 4);
//   }

//   .col-2-of-4 {
//     width: calc(2 * ((100% - 3 * 6rem) / 4)) + 6rem);
//   }

//   .col-3-of-4 {
//     width: calc(3 * ((100% - 3 * 6rem) / 4)) + 2 * 6rem);
//   }
// `

const Contact = () => {
  return (
    <Wrapper>
      <ContactPageStyle>
        Hello
      </ContactPageStyle>
    </Wrapper>
  );
}

export default Contact;
