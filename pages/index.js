import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <> 
      <header>
        
        <div className="navbar navbar-dark bg-dark shadow-sm" >
          <div className="container" >
            <a href="#" className="navbar-brand d-flex align-items-center">
            <Image src="/camara.png" width="350px" height="72px" />
            </a>
          </div>
        </div>
      </header>
      
      <div className="px-3 py-3 my-5 text-center">
        <h1 className="display-5 fw-bold">Seja bem-vindo a comunidade online da Câmara Brasil-Alemanha!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Selecione a cidade em que sua empresa é associada e realize o login.
</p>
         
        </div>
      </div>
    

      <div style={{margin: '0px 20px 0px 20px', height: "100%"}}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          
          <div className="col" style={{margin: '0px 0px 20px 0px'}}>
            <a href="https://associadoahkbrasil.force.com/ahksp">
              <div className={styles.containerOverlay}>
                <Image src="/sp.png" className={styles.image}  alt="AHK" width="800px" height="1000px"/> 
                <div className={styles.overlay}>                
                </div>
                <h5 className={styles.text}>São Paulo</h5>
              </div>
            </a>
          </div>

          <div className="col" style={{margin: '0px 0px 20px 0px'}}>
            <a href="https://associadoahkbrasil.force.com/ahkrj">
              <div className={styles.containerOverlay}>
                <Image src="/rj.jpg" className={styles.image} alt="AHK" width="800px" height="1000px"/>
                <div className={styles.overlay}>                
                </div>
                <h5 className={styles.text}>Rio de Janeiro</h5>
              </div>
            </a>
          </div>

          <div className="col" style={{margin: '0px 0px 20px 0px'}}>    
            <a href="https://associadoahkbrasil.force.com/ahkpoa">   
              <div className={styles.containerOverlay}>
                <Image src="/poa.jpg" className={styles.image} alt="AHK" width="800px" height="1000px"/>              
                <div className={styles.overlay}>                
                </div>
                <h5 className={styles.text}>Porto Alegre</h5>
              </div>
            </a> 
          </div>

          <div className="col" style={{margin: '0px 0px 20px 0px'}}>
            <a href="https://associadoahkbrasil.force.com/ahkpr">  
              <div className={styles.containerOverlay}>
                <Image src="/cur.jpg" className={styles.image} alt="AHK" width="800px" height="1000px"/>
                <div className={styles.overlay}>                
                </div>
                <h5 className={styles.text}>Paraná</h5>
              </div>
            </a>
          </div>

          


        </div>
      </div>
      
      <footer className="text-muted py-5">
     
      <hr></hr>
        <div className="container text-center">
        
          <a href="http://www.bmwi.de/"><img src="/banner_1.png" className={styles.footer_image} alt="AHK" width="128px" height="120px" /></a>
          <a href="http://www.bmwi.de/"><img src="/banner_2..png"  className={styles.footer_image} alt="AHK" width="100px" height="49px" /></a>
          <a href="http://www.bmwi.de/"><img src="/banner_3..png" className={styles.footer_image} alt="AHK" width="100px" height="49px" /></a>
          <a href="http://www.bmwi.de/"><img src="/banner_4.png" className={styles.footer_image} alt="AHK" width="136px" height="20px" /></a>
          
        </div>
      </footer>
    </>
  )
}
