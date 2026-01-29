import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import './css/SingleGood.css'
import { Helmet } from 'react-helmet';

// import favicon from '../src/Components/Assets/icon.ico'
import sber from './Components/Assets/sber.png'
import mega from './Components/Assets/mega.png'
import auchan from './Components/Assets/auchan.png'
import perek from './Components/Assets/perek.png'
import market from './Components/Assets/market.png'

const SingleGood = () => {
    const params = useParams();
    const { collectionId, id } = params;

    const [itemData, setItemData] = useState(null);
    const db = getFirestore();

    useEffect(() => {
        const fetchItemData = async () => {
            try {
                console.log("Collection ID:", collectionId);
                console.log("Document ID:", id);

                const docRef = doc(db, collectionId, id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const itemDataValue = docSnap.data();
                    setItemData(itemDataValue);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document:", error.message);
            }
        };

        fetchItemData();
    }, [id, db, collectionId]);

    return (
        <div>
            <Helmet>
                <link rel="icon" href="/icon.ico" />
            </Helmet>
            {itemData && (
                <div className='All'>
                    <div className='IN'>
                    <img src={itemData.image} alt='' />
                    <p >{itemData.name}</p>
                    </div>
                    <div className='info'>
                    <div className='desc'>
                    <h1>Партнерские площадки:</h1>
                    <div className='partners'>
                    <a href={itemData.sber} title={itemData.sber ? "Перейти к товару на СберМаркет" : "*Недоступен"}>
        <img style={{textDecoration: 'none', color: 'black'}} src={sber} alt=''></img>
    </a>
    <a href={itemData.mega} title={itemData.mega ? "Перейти к товару на МегаМаркет" : "*Недоступен"}>
        <img style={{textDecoration: 'none', color: 'black'}} src={mega} alt=''></img>
    </a>
    <a href={itemData.market} title={itemData.market ? "Перейти к товару на Яндекс Маркет" : "*Недоступен"}>
        <img style={{textDecoration: 'none', color: 'black'}} src={market} alt=''></img>
    </a>
    <a href={itemData.auchan} title={itemData.auchan ? "Перейти к товару на Ашане" : "*Недоступен"}>
        <img style={{textDecoration: 'none', color: 'black'}} src={auchan} alt=''></img>
    </a>
    <a href={itemData.perek} title={itemData.perek ? "Перейти к товару в Перекрестке" : "*Недоступен"}>
        <img style={{textDecoration: 'none', color: 'black'}} src={perek} alt=''></img>
    </a>
    </div>
                    <h2>Описание товара</h2>
                    <p className='description'>{itemData.description}</p>
                    
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleGood;
