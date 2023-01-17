import { MainHeader, TopNavBar } from "./Compoents/index";
import { Routes, Route } from "react-router-dom";
import {
  FeaturedCapabilities,
  EnergyTransition,
  ProductsServices,
  Company,
  Home,
  AboutCompany,
  Footer,
  HydrogenTechnologies,
} from "./container/index";
import { CenterSection } from "./Compoents/index";
function App() {
  return (
    <div className="App">
      <TopNavBar />
      <MainHeader />
      <main className="">
        <Routes>
          <Route
            path="/FeaturedCapabilities"
            element={<FeaturedCapabilities />}
          />
          <Route path="/ProductsServices" element={<ProductsServices />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/" element={<Home />} />
          <Route path="/CenterSection" element={<CenterSection />} />
          <Route path="/AboutCompany" element={<AboutCompany />} />
          <Route path="/EnergyTransition" element={<EnergyTransition />} />
          <Route
            path="/HydrogenTechnologies"
            element={<HydrogenTechnologies />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
