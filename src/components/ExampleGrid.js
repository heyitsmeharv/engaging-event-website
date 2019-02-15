import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours';

// grid-width = 114rem;
// gutter vertical = 8rem;
// gutter horizontal = 6rem;

const Row = styled.div`
  max-width: 114rem;
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
    background-color: ${colour.primaryDark};
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

const ExampleGrid = () => {
  return (
    <section>
      <Row>
        <div className="col-1-of-2">
          Col 1 of 2
        </div>
        <div className="col-1-of-2">
          Col 1 of 2
        </div>
      </Row>
      <Row>
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
      </Row>
      <Row>
        <div className="col-1-of-3">
          Col 1 of 3
        </div>
        <div className="col-2-of-3">
          Col 2 of 3
        </div>
      </Row>
      <Row>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
      </Row>
      <Row>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-2-of-4">
          Col 2 of 4
        </div>
      </Row>
      <Row>
        <div className="col-1-of-4">
          Col 1 of 4
        </div>
        <div className="col-3-of-4">
          Col 3 of 4
        </div>
      </Row>
    </section>
  );
}

export default ExampleGrid;