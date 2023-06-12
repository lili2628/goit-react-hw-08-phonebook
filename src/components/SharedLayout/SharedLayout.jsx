
import { Outlet } from 'react-router-dom';
import  AppBar  from 'components/AppBar';
import { Suspense } from 'react';
import { Container } from './SharedLayout.styled';



function SharedLayout() { 
  
  return (
      <Container>
          <AppBar />
          <Suspense fallback={null}>
              <Outlet />
          </Suspense>
      </Container>
    );
}
  
export default SharedLayout;