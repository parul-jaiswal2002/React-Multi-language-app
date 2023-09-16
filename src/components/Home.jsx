import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';
import '../styles/Home.css'

const Home = () => {

    const { t } = useTranslation();

    function handleChange(e) {
    i18next.changeLanguage(e.target.value)
    }

return (
  <div >
    <div className="drop-down m-4">
          <select id="language" name="language" className="select" onChange={handleChange}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="chi">Chienese</option>
          </select>
        </div>

        <p className='content'>
          <h3>{t('Welcome.1')}</h3>  <h3>{t('React.1')}</h3> 
        </p>
      
  </div>
  )
}

export default Home