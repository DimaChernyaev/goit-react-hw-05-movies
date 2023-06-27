import {
  ButtonBackHome,
  WrapperNonFound,
  NonFound,
  NonFoundText,
} from 'components/found404/NotFound.styled';
import { BiSolidDoorOpen } from 'react-icons/bi';

const NotFound = () => {
  return (
    <WrapperNonFound>
      <NonFound>404</NonFound>
      <NonFoundText>Oops, this page not found</NonFoundText>
      <ButtonBackHome to="/">
        <BiSolidDoorOpen size={20} />
        Go back to home
      </ButtonBackHome>
    </WrapperNonFound>
  );
};

export default NotFound;
