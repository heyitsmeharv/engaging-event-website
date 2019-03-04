import { keyframes } from "styled-components";

const SlideInTop = keyframes`
from {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  visibility: visible;
}

to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
`;

export default SlideInTop;