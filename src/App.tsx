import "./i18n";
import Login from "./pages/Login";
import CompanyDetailView from "./components/CompanyDetailView";
import Report from "./pages/Report";
import DemoListPage from "./pages/DemoListPage";
import DemoTreePage from "./pages/DemoTreePage";

function App() {
  // Get current page from URL query parameter
  const getCurrentPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || 'home';
  };

  // Render different views based on page parameter
  const renderView = () => {
    const currentPage = getCurrentPage();
    
    switch (currentPage) {
      case 'login':
        return <Login />;
      case 'detail':
        return <CompanyDetailView />;
      case 'demo_list':
        return <DemoListPage />;
      case 'demo_tree':
        return <DemoTreePage />;
      case 'home':
      default:
        return <Report />;
    }
  };

  return renderView();
}

export default App;
