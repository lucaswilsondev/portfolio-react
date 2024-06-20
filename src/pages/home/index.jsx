import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import cat from './undraw_cat_epte.svg'
import Container from '../../compoents/Container'

function Home() {
  return (
    <>
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, sou <br />
              <span>Lucas</span> <br />
              Dev Full Stack
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
            </Link>
          </div>
          <figure>
            <img className={styles.img_home} src={cat} alt="Imagem de Home" />
          </figure>
        </section>
      </Container>

    </>
  )
}

export default Home
