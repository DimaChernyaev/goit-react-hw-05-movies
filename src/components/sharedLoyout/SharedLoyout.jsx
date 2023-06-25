import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/loader/Loader';
import { Container, Header, Navigation, NavigationLink } from './SharedLoyout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </Navigation>
        </Container>
      </Header>

      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
