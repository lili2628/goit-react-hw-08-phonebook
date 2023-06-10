
import { Outlet } from 'react-router-dom';
import  AppBar  from 'components/AppBar';
import { Suspense } from 'react';


function SharedLayout() { 
  
  return (
      <>
          <AppBar />
          <Suspense fallback={null}>
              <Outlet />
          </Suspense>
      </>
    );
}
  
export default SharedLayout;