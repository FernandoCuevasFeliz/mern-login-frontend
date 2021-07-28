import { AuthProvider } from 'context/Auth/AuthProvider';
import { GlobalProvider } from 'context/Global/GlobalProvider';
import IndexRouter from 'routers/IndexRouter';

const App = () => {
  return (
    <div className="container-views">
      <GlobalProvider>
        <AuthProvider>
          <IndexRouter />
        </AuthProvider>
      </GlobalProvider>
    </div>
  );
};

export default App;
