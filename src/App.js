import { MainHeader, TopNavBar } from "./Compoents/index";
import { Routes, Route } from "react-router-dom";
import {
  EnergyTransition,
  Home,
  AboutCompany,
  Footer,
  ContactUs,
  Governance,
} from "./container/index";
import CyberSecurity from "./container/CyberSecurity/CyberSecurity";
import Sustainability from "./container/Sustainability/Sustainability";
import Careers from "./container/Careers/Careers";
import Safety from "./container/Safety/Safety";
function App() {
  return (
    <div className="App">
      <TopNavBar />
      <MainHeader />
      <main className="">
        <Routes>
          {/* <Route
            path="/FeaturedCapabilities"
            element={<FeaturedCapabilities />}
          /> */}
          {/* <Route path="/ProductsServices" element={<ProductsServices />} /> */}
          {/* <Route path="/Company" element={<Company />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/CenterSection" element={<CenterSection />} /> */}
          <Route path="/AboutCompany" element={<AboutCompany />} />
          <Route path="/SupplyChain" element={<EnergyTransition />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/Governance" element={<Governance />} />
          <Route path="/Sustainability" element={<Sustainability />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Safety" element={<Safety />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
