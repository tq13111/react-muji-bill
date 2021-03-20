import styled from 'styled-components';
import Tabs from 'components/Tabs';

const $mainBackground = 'black';

const MyTabs = styled(Tabs)`
  background: white;
  color: ${$mainBackground};

  .selected {
    background: ${$mainBackground};
    color: white;

    &::after {
      display: none;
    }
  }
`;
export default MyTabs;
