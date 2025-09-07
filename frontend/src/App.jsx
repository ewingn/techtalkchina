import Home from './pages/Home'
import Latest from './pages/Latest'
import AI from './pages/AI'
import EVs from './pages/EVs'
import Energy from './pages/Energy'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/latest" element={<Latest />} />
  <Route path="/ai" element={<AI />} />
  <Route path="/evs" element={<EVs />} />
  <Route path="/energy" element={<Energy />} />
  <Route path="*" element={<Navigate to="/latest" replace />} />
</Routes>
