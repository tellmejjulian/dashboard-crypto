import React from 'react'
import '../Footer.css'
import LogoJJulian from '../img/marca-personal-w.png'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='footer-up'>
        <div className='footer-p'>
        <p>DESCARGO DE RESPONSABILIDAD IMPORTANTE: todo el contenido disponible en nuestro sitio web, en los sitios web hipervinculados, y en las aplicaciones, foros, blogs, cuentas de redes sociales y otras plataformas asociados ("Sitio") tienen como único objetivo proporcionarle información general procedente de fuentes externas.</p>
        </div>

        <div className="footer-c">
                    <p>Crypto Stadistics</p>
                    <p>© 2023</p>
        </div>

        <div className='footer-down'>
          <p>Developed by</p>

          <div>
            <img src={LogoJJulian} alt="Logo JJR" />
          </div>
        </div>
      </div>
    </div>
  )
}