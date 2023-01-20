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
  ContactUs,
  Governance,
} from "./container/index";
import { CenterSection } from "./Compoents/index";
import CyberSecurity from "./container/CyberSecurity/CyberSecurity";
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
          <Route path="/SupplyChain" element={<EnergyTransition />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/Governance" element={<Governance />} />

          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
