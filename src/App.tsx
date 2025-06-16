import "./i18n";
import Login from "./pages/Login";
import CompanyDetailView from "./components/CompanyDetailView";
import Report from "./pages/Report";
import DemoListPage from "./pages/DemoListPage";
import DemoTreePage from "./pages/DemoTreePage";
import ExplorePage from "./pages/ExplorePage";
import { useModel } from "./models/useModel";

function App() {
  const { modelService } = useModel();
  const rootData = modelService.getRootData();
  // Get current page from URL query parameter
  const getCurrentPage = () => {
    if(! rootData.gCredentialResponse) return 'login';
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
      case 'explore':
        return <ExplorePage />;
      case 'home':
      default:
        return <Report />;
    }
  };

  return renderView();
}

export default App;
