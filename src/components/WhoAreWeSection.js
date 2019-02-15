import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours';
import WhoAreWeImage from '../resources/images/WhoAreWe.jpg';


const Row = styled.div`
  max-width: 68rem;
  background-color: ${colour.white};
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 8rem;
  }

  ::after {
    content: "";
    display: table;
    clear: both;
  }

  //! select all the class attributes starting with 'col-'
  [class^="col-"] {
    float: left;

    &:not(:last-child) {
      margin-right: 6rem;
    }
  }

  .col-1-of-2 {
    width: calc((100% - 6rem) / 2);
  }

  .col-1-of-3 {
    width: calc((100% - 2 * 6rem) / 3);
  }

  .col-2-of-3 {
    width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem);
  }

  .col-1-of-4 {
    width: calc((100% - 3 * 6rem) / 4);
  }

  .col-2-of-4 {
    width: calc(2 * ((100% - 3 * 6rem) / 4)) + 6rem;
  }

  .col-3-of-4 {
    width: calc(3 * ((100% - 3 * 6rem) / 4)) + 2 * 6rem;
  }
`

const SectionWhoAreWe = styled.section`
  background-color: ${colour.lightGray};
  padding: 15rem 0;
  margin-top: -20vh;
  .section-header {
    text-align: center;
    font-size: 4rem;
    text-transform: uppercase;
    padding-bottom: 2rem;
    color: ${colour.gray};
    font-weight: 700;
    letter-spacing: 1.5rem;
    background-image: linear-gradient(to right, ${colour.primaryDarker}, ${colour.primaryLighter});
    -webkit-background-clip:text;
    color: transparent;
  }
  .section-text {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    margin-right: 2rem;
    margin-left: 2rem;
  }
`

const WhoAreWeSection = () => {
  return (
    <SectionWhoAreWe>
      <h2 className="section-header">
        Who Are We?
      </h2>
      <p className="section-text">
        Engaging Event is a family owned business which has been running since 2017. Our goal is to help create lasting memories from your wedding,
        party or corporate event by supplying a fully staffed photo booth with a wide range of props, and great photos printed on site.
        We cover a 40 mile radius of Wantage with no travel or delivery costs.
      </p>
      <Row>
        <div className="col-1-of-1">
          <img src={WhoAreWeImage} style={{ height: '50rem', border: '20px solid black'}} alt="who are we" />
        </div>
      </Row>
    </SectionWhoAreWe>
  );
}

export default WhoAreWeSection;
