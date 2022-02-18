import Loader from 'components/Loader/Loader';
import { Gallery } from 'components/Gallery/Gallery';
import { Section } from 'components/Section/Section.styled';
import { Text } from 'components/Text/Text';
import { useFetchMovies } from 'hooks';

export const HomePage = () => {
  const { items, loading } = useFetchMovies();

  return (
    <main>
      <Section>
        <Text>Trending today</Text>
        {loading && <Loader />}
        <Gallery movies={items}></Gallery>
      </Section>
    </main>
  );
};
