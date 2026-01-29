import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacts } from './Pages/Contacts';
import Goods from './Pages/Goods';
import SingleGood from './SingleGood';
import { SosiskiSardelki } from './Pages/SosiskiSardelki';
import { PolukopchenKolbasy } from './Pages/PolukopchenKolbasy';
import { VarenKolbasy } from './Pages/VarenKolbasy';
import { VarenoKopchenKolbasy } from './Pages/VarenoKopchenKolbasy';
import { ProductyBezSvininy } from './Pages/ProductyBezSvininy';




function App() {
  return (
    <div>
      {/* <head>
  <link rel="icon" href="%PUBLIC_URL%/icon.ico" />
</head>  */}
<BrowserRouter>
<Navbar />
            <Routes>
                <Route path="/" element={<Goods />} />
                <Route path="/:collectionId/:id" element={<SingleGood />} />

                {/* <Route path='/' element={<Goods />}/> */}
       <Route path='/sosiski_sardelki' element={<SosiskiSardelki category="sosisk_sardelk"/>}/>
       <Route path='/polukopchen_kolbasy' element={<PolukopchenKolbasy category="polukopchen_kolbas"/>}/>
       <Route path='/varen_kolbasy' element={<VarenKolbasy category="varen_kolbas"/>}/>
       <Route path='/vareno-kopchen_kolbasy' element={<VarenoKopchenKolbasy category="vareno-kopchen_kolbas"/>}/>
       <Route path='/producty_bez_svininy' element={<ProductyBezSvininy category="product_bez_svinin"/>}/>
       <Route path='/contacts' element={<Contacts category="contact"/>}/>
            </Routes>
        </BrowserRouter>


        </div>

    // <div >
    //   <BrowserRouter>
    //   <Navbar />
      
    //   <Routes>
        
    //     <Route path='/' element={<Goods />}/>
    //     <Route path='/sosiski_sardelki' element={<GoodsCategory category="sosisk_sardelk"/>}/>
    //     <Route path='/varen_kolbasy' element={<GoodsCategory category="varen_kolbas"/>}/>
    //     <Route path='/polukopchen_kolbasy' element={<GoodsCategory category="polukopchen_kolbas"/>}/>
    //     <Route path='/vareno-kopchen_kolbasy' element={<GoodsCategory category="vareno-kopchen_kolbas"/>}/>
    //     <Route path='/sirokopchen_kolbasy_delicatesy' element={<GoodsCategory category="sirokopchen_kolbas_delicates"/>}/>
    //     <Route path='/producty_bez_svininy' element={<GoodsCategory category="product_bez_svinin"/>}/>
    //     <Route path='/narezky' element={<GoodsCategory category="narezk"/>}/>
    //     <Route path='/contacts' element={<Contacts category="contact"/>}/>
        
    //   </Routes>
    //   </BrowserRouter>
   
    // </div>
  );
}

export default App;