import { ColorRing } from 'react-loader-spinner';
import { LoaderChar } from './LoaderRing.styled';

function LoaderRing() {
  return (
    <LoaderChar>
      <ColorRing color="#00BFFF" height="32" />
    </LoaderChar>
  );
}

export default LoaderRing;