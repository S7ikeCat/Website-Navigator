import React from 'react'
import '../css/Contacts.css'

export const Contacts = () => {
  return (
    <div className='All_info' >
      <ul className='Contact_info' >
        <li style={{fontWeight: 'bold'}}>Адрес:</li>
        <li>354068, Краснодарский край​, г. Сочи, ул. Донская 5</li>
        <li style={{fontWeight: 'bold'}}>Телефон:</li>
        <li>8-800-301-61-16 все звонки по России бесплатны</li>
        <li>8 (862) 255-96-92</li>
        <li style={{fontWeight: 'bold'}}>Эл. адрес:</li>
        <li>secretar@sochimk.ru</li>
      </ul>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1408.039473393385!2d39.727125798627476!3d43.612107665500375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5cb867a58042b%3A0xf6e9fa476df703f!2z0KHQvtGH0LjQvdGB0LrQuNC5INC80Y_RgdC-0LrQvtC80LHQuNC90LDRgg!5e0!3m2!1sru!2sru!4v1707486066464!5m2!1sru!2sru"
      width="700"
      height="300"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>

    </div>
  )
}
