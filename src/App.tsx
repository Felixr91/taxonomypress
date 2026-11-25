import { Route, Routes } from 'react-router';

import { Layout } from './components/Layout';
import Home from './pages/Home';
import FloralObserver from './pages/FloralObserver';
import OpenCall from './pages/OpenCall';
import Submit from './pages/Submit';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="floral-observer" element={<FloralObserver />} />
        <Route path="open-call" element={<OpenCall />} />
        <Route path="submit" element={<Submit />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
