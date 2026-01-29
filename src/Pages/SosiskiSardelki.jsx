import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import '../firebaseconfing';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import SingleGood from '../SingleGood';
import '../css/Goods.css'
// import '../css/SosiskiSardelki.css'

export const SosiskiSardelki = () => {

    const [storeValues, setStoreValues] = useState([]);
    const db = getFirestore();

    const fetchDataFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "sosiski_sardelki"));
        const temporaryArr = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push({ id: doc.id, ...doc.data() }); // Включаем id в данные
        });
        setStoreValues(temporaryArr);
    };

    useEffect(() => {
        fetchDataFromFirestore(); // Вызываем функцию при монтировании компонента
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Пустой массив зависимостей, чтобы вызвать useEffect только один раз

    return (
        <div>

<ul className='nav-category'>
<li><Link activeClassName='active-link' to="/sosiski_sardelki" style={{textDecoration: 'none', color: 'black', borderBottom: '2px solid brown'}}>Сосиски и сардельки</Link></li>
            <li><Link activeClassName='active-link' to="/polukopchen_kolbasy" style={{textDecoration: 'none', color: 'black'}}>Полукопченые колбасы</Link></li>
            <li><Link activeClassName='active-link' to="/varen_kolbasy" style={{textDecoration: 'none', color: 'black'}}>Вареные колбасы</Link></li>
            <li><Link activeClassName='active-link' to="/vareno-kopchen_kolbasy" style={{textDecoration: 'none', color: 'black'}}>Варено-копченые колбасы</Link></li>
            <li><Link activeClassName='active-link' to="/producty_bez_svininy" style={{textDecoration: 'none', color: 'black'}}>Продукты без свинины</Link></li>
            
        </ul>

            <div class="container">
                {storeValues.map((item, index) => (
                    <div key={index} className='Goods_category'>
                        <Link to={`/sosiski_sardelki/${item.id}`} target="_blank" rel="noopener noreferrer"><img src={item.image} alt='' style={{width: '230px'}}/></Link>
                        <Link style={{textDecoration: 'none',  color: 'black'}} to={`/sosiski_sardelki/${item.id}`} target="_blank" rel="noopener noreferrer"><p >{item.name}</p></Link>
                        {/* <Link to={`/sosiski_sardelki/${item.id}`} target="_blank" rel="noopener noreferrer">{item.partner1}</Link> */}
                    </div>
                ))}
            </div>
            <Routes>
                <Route path="/sosiski_sardelki/:id" element={<SingleGood />} />
            </Routes>
        </div>
    );
};
