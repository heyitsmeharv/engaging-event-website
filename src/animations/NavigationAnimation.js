import styled from 'styled-components';
import Page from '../components/Page';
import SlideOutTop from './SlideOutTop';
import SlideInTop from './SlideInTop';

const NavigationAnimation = styled(Page)`
&.page-enter {
  animation: ${SlideOutTop} 0.2s forwards;
}
&.page-exit {
  animation: ${SlideInTop} 0.2s forwards;
}
`;

export default NavigationAnimation;