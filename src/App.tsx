import { Header } from './components/Header';
import { CalendarGrid } from './components/CalendarGrid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ backgroundColor: '#08080E', minHeight: '100vh' }}>
        <Header />
        <main className="container mx-auto px-3 sm:px-6 py-4">
          <CalendarGrid />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
