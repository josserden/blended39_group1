import { Revie } from './Revie';
import { Gallery } from 'components/Gallery/Gallery';
export const Reviews = () => {
  return (
    <Gallery arr={[{ id: 3424 }, { id: 74 }]}>
      <Revie user={'Irchik'} revie="O.K." />
    </Gallery>
  );
};
