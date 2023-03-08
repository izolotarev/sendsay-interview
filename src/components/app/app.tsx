import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const/conts';
import Main from '../main/main';
import NotFound from '../not-found/not-found';

function App(): JSX.Element {
  return (
      <Routes>
        <Route path={AppRoute.ROOT} element={<Main/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
  );
};

export default App;