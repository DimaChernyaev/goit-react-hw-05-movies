import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="goldenrod"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
