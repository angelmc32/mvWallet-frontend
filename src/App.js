import Layout from "./components/layout/Layout";
import AppRouter from "./routes/index";
import "./styles/styles.css";
import "./styles/font-styles.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
};

export default App;
