import React from 'react';
import styled, { css } from 'styled-components';
import { MainButton, PackagesButton } from '../components/Button';
import colour from '../resources/styles/colours';
import PackageOne from '../resources/images/packageone.png';
import PackageTwo from '../resources/images/packagetwo.png';
import PackageThree from '../resources/images/packagethree.png';
import { moveInBottom } from '../animations/Animations';

const Row = styled.div`
  max-width: 166rem;
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

const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  text-align: center;
  padding-top: 2rem;
`;

const Card = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 50rem;

  .side {
    height: 50rem;
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    box-shadow: 0, 1.5rem 4rem rbga(#000, .15);
  }

  .front {
    background-color: ${colour.white}
  }

  .back {
    transform: rotateY(180deg);
  }

  .back-colour-one {
    background-image: linear-gradient(to right bottom, ${colour.primaryLight}, ${colour.primaryDarker});
  }

  .picture-one {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    background-image: linear-gradient(to right bottom, rgb(113, 201, 206), rgb(166, 227, 233)), url(${PackageOne});
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    /* height: 50%; */
  }

  .picture-two {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    background-image: linear-gradient(to right bottom, rgb(113, 201, 206), rgb(166, 227, 233)), url(${PackageTwo});
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .picture-three {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    background-image: linear-gradient(to right bottom, rgb(113, 201, 206), rgb(166, 227, 233)), url(${PackageThree});
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .heading {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: ${colour.white};
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
  }

  .heading-span {
    padding: 1rem 1.5rem;
    webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  .heading-colour-one {
    background-image: linear-gradient(to right bottom, rgb(113, 201, 206, 0.85), rgb(166, 227, 233, 0.85));
  }

  .details {
    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto;
    }
    .three {
      text-align: center;
      font-size: 1.5rem;
      padding: 3rem;

      &:not(:last-child) {
        border-bottom: 1px solid ${colour.lightGray};
      }
    }
    .four {
      text-align: center;
      font-size: 1.5rem;
      padding: 2rem;

      &:not(:last-child) {
        border-bottom: 1px solid ${colour.lightGray};
      }
    }
    .five {
      text-align: center;
      font-size: 1.5rem;
      padding: 1.3rem;

      &:not(:last-child) {
        border-bottom: 1px solid ${colour.lightGray};
      }
    }
  }

  .packages {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .package-box {
    text-align: center;
    color: ${colour.white};
    margin-bottom: 8rem;

  }

  .package-only {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .package-value {
    font-size: 6rem;
    font-weight: 100;
  }

  :hover .front {
    transform: rotateY(-180deg);
  }

  :hover .back {
    transform: rotateY(0);
  }
`


const SectionPackages = styled.section`
  background-color: ${colour.lightGray};
  padding: 15rem 0;
  .section-header {
    text-align: center;
    font-size: 4rem;
    text-transform: uppercase;
    padding-bottom: 3rem;
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

const PackagesSection = () => {
  return (
    <SectionPackages>
      <h2 className="section-header">
        Popular Packages
      </h2>
      <Row>
      <div className="col-1-of-3">
        <Card lighter="true">
            <div className="side front">
              <div className="picture-two">
                &nbsp;
              </div>
              <h4 className="heading">
                <span className="heading-span heading-colour-one">
                  Simply Digital
                </span>
              </h4>
              <div className="details">
                <ul>
                  <li className="three">Unlimited Visits</li>
                  <li className="three">Personalised Templates</li>
                  <li className="three">USB Stick</li>
                </ul>
              </div>
            </div>
            <div className="side back back-colour-one">
              <div className="packages">
                <div className="package-box">
                  <p className="package-only">Only</p>
                  <p className="package-value">£250</p>
                </div>
                <MainButton animate="true" white="true">Book now!</MainButton>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-1-of-3">
          <Card lighter="true">
            <div className="side front">
              <div className="picture-one">
                &nbsp;
              </div>
              <h4 className="heading">
                <span className="heading-span heading-colour-one">
                  Party Plan
                </span>
              </h4>
              <div className="details">
                <ul>
                  <li className="four">Fully Operational For 3 Hours</li>
                  <li className="four">Unlimited Visits</li>
                  <li className="four">Personalised Templates</li>
                  <li className="four">Over 50 Props</li>
                </ul>
              </div>
            </div>
            <div className="side back back-colour-one">
              <div className="packages">
                <div className="package-box">
                  <p className="package-only">Only</p>
                  <p className="package-value">£325</p>
                </div>
                <MainButton animate="true" white="true">Book now!</MainButton>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-1-of-3">
        <Card lighter="true">
            <div className="side front">
              <div className="picture-three">
                &nbsp;
              </div>
              <h4 className="heading">
                <span className="heading-span heading-colour-one">
                  Party Memories
                </span>
              </h4>
              <div className="details">
                <ul>
                  <li className="five">Staff On Hand At All Times</li>
                  <li className="five">Unlimited Visits</li>
                  <li className="five">Photo Album</li>
                  <li className="five">Photo Sharing Pad</li>
                  <li className="five">Additional Prints</li>
                </ul>
              </div>
            </div>
            <div className="side back back-colour-one">
              <div className="packages">
                <div className="package-box">
                  <p className="package-only">Only</p>
                  <p className="package-value">£400</p>
                </div>
                <MainButton animate="true" white="true">Book now!</MainButton>
              </div>
            </div>
          </Card>
        </div>
      </Row>
      <ButtonWrapper>
        <PackagesButton animate="true" blue="true">Discover All Packages</PackagesButton>
      </ButtonWrapper>
    </SectionPackages>
  );
}

export default PackagesSection;
