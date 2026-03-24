/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Amazone from './pages/Amazone';
import Congo from './pages/Congo';
import Borneo from './pages/Borneo';
import Antwoorden from './pages/Antwoorden';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="amazone" element={<Amazone />} />
          <Route path="congo" element={<Congo />} />
          <Route path="borneo" element={<Borneo />} />
          <Route path="antwoorden" element={<Antwoorden />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
