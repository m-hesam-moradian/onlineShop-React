import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MarketComponent from "../../Components/marketComponent/marketComponent";
import Footer from "../../Components/Footer/Footer";
export default function Store() {
  return (
    <>
      <header className="px-3">
        <Navbar />
      </header>
          <div>
              <MarketComponent></MarketComponent>
      </div>
      <Footer />
    </>
  );
}
