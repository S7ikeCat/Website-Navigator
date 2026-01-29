import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import '../firebaseconfing';
import '../css/Goods.css'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import SingleGood from '../SingleGood';
import '../css/AllGoods.css'

const Goods = () => {
  const [storeValues, setStoreValues] = useState([]);
  const db = getFirestore();

  const collectionsArray = ["polukopchen_kolbasy", "sosiski_sardelki", "varen_kolbasy", "vareno-kopchen_kolbasy", "producty_bez_svininy"];

  const fetchCollectionsFromFirestore = async () => {
    const temporaryArr = [];

    for (const collectionName of collectionsArray) {
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach((doc) => {
        temporaryArr.push({ id: doc.id, ...doc.data(), collection: collectionName });
      });
    }

    setStoreValues(temporaryArr);
  };

  useEffect(() => {
    fetchCollectionsFromFirestore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul className='nav-category'>
        <li><Link to="/sosiski_sardelki" style={{textDecoration: 'none', color: 'black'}}>Сосиски и сардельки</Link></li>
        <li><Link to="/polukopchen_kolbasy" style={{textDecoration: 'none', color: 'black'}}>Полукопченые колбасы</Link></li>
        <li><Link to="/varen_kolbasy" style={{textDecoration: 'none', color: 'black'}}>Вареные колбасы</Link></li>
        <li><Link to="/vareno-kopchen_kolbasy" style={{textDecoration: 'none', color: 'black'}}>Варено-копченые колбасы</Link></li>
        <li><Link to="/producty_bez_svininy" style={{textDecoration: 'none', color: 'black'}}>Продукты без свинины</Link></li>
      </ul>
      <div className="All_container">
        {storeValues.map((item, index) => (
          <div key={index} className='All_Goods_category'>
            <Link target="_blank" rel="noopener noreferrer" to={`/${item.collection}/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
              <img src={item.image} alt='' />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to={`/${item.collection}/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
              <p>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/:collection/:id" element={<SingleGood />} />
      </Routes>
    </div>
  );
};

export default Goods;
