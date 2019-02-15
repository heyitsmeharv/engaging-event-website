import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours';
import WhatWeDo from '../resources/images/whatwedo.png';
import { FiCamera, FiHeart, FiShoppingBag, FiMail, FiInstagram } from "react-icons/fi";

const Row = styled.div`
  max-width: 114rem;
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

const SectionWhatDoWeOffer = styled.section`
  background-image: linear-gradient(to right bottom, rgb(113, 201, 206, 0.8), rgb(166, 227, 233, 0.8)), url(${WhatWeDo});
  background-size: cover;
  padding: 10rem 0;
  /* margin-top: -20vh; */

  /* transform: skewY(-7deg); */

  /* & > * {
    transform: skewY(7deg);
  } */

  .section-header {
    text-align: center;
    font-size: 4rem;
    text-transform: uppercase;
    padding-bottom: 2rem;
    color: ${colour.gray}
    font-weight: 700;
    letter-spacing: 1.5rem;
    background-image: linear-gradient(to right, ${colour.white}, ${colour.white});
    -webkit-background-clip:text;
    color: transparent;
  }
  .section-text {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 5rem;
    margin-right: 2rem;
    margin-left: 2rem;
  }
  .highlight-box {
    background-color: rgba(255, 255, 255, .8);
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 50px;
    /* border-radius: 3px; */
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
    transition: transform .3s;
      .highlight-box-icon {
        font-size: 6rem;
        margin-bottom: .5rem;
        color: ${colour.primaryDarker};
      }
      .highlight-box-heading {
        font-size: 1.6rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 2rem;
      }
      .highlight-box-text {
        font-size: 1.6rem;
      }
      :hover {
        transform: translateY(-1.5rem) scale(1.03);
        box-shadow: 0 1rem 2rem rgba(255, 255, 255, .4);
      }
    }
`

const WhatDoWeOfferSection = () => {
  return (
    <SectionWhatDoWeOffer>
      <h2 className="section-header">
        What Do We Offer?
      </h2>
      <p className="section-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum viverra enim, at mollis ante ultrices nec. Nulla metus lorem, placerat at est in, imperdiet aliquam libero. Phasellus nec nulla nisl. Integer ut metus luctus, finibus lorem congue, sollicitudin augue. Suspendisse efficitur felis a diam dictum vulputate. Etiam pellentesque neque non lectus dictum, sit amet ullamcorper sapien laoreet.
      </p>
        <Row>
          <div className="col-1-of-4">
            <div className="highlight-box">
              <div className="highlight-box-icon">
                <FiInstagram />
              </div>
              <h3 className="highlight-box-heading">Photobooth</h3>
              <p className="highlight-box-text">
                High quality prints on 6 x 4 paper
                Our booth can be supplied as a large enclosed booth, or if you're pushed for space we can supply an open selfie pod.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="highlight-box">
              <div className="highlight-box-icon">
                <FiHeart />
              </div>
              <h3 className="highlight-box-heading">Love Lights</h3>
              <p className="highlight-box-text">
                Book the lights as an add on with a photobooth booking (4.5 Hours)
                £100
                Full hire of the lights with staff bringing them to your venue, set up and collection
                £150
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="highlight-box">
              <div className="highlight-box-icon">
                <FiShoppingBag />
              </div>
              <h3 className="highlight-box-heading">Sweet Cart</h3>
              <p className="highlight-box-text">
                We supply 6 large jars of sweets of your choice and an additional large glass full of marshmallows or popcorn,
                all on a decorative wooden sweet cart complete with bunting.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="highlight-box">
              <div className="highlight-box-icon">
                <FiMail />
              </div>
              <h3 className="highlight-box-heading">Post Box</h3>
              <p className="highlight-box-text">
                35 with any sweet cart or LOVE light booking or £40 without.
                The booking is for the entire weekend if you pick up and drop off from Wantage.
              </p>
            </div>
          </div>
        </Row>
    </SectionWhatDoWeOffer>
  );
}

export default WhatDoWeOfferSection;
