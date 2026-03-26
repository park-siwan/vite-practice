import { Button } from './components/Button';

function App() {
  return (
    <div style={{ display: 'flex', gap: 12, padding: 40 }}>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
    </div>
  );
}

export default App;
