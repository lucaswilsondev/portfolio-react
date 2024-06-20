import styles from './sobre.module.css'
import avatar from './images/avatar.png'
import html from './images/html.svg'
import css from './images/css.svg'
import js from './images/js.svg'
import react from './images/react.svg'
import node from './images/node.svg'
import Container from '../../compoents/Container'

function Sobre() {
    return (
        <>
            <Container>
                <section className={styles.sobre}>
                    <img src={avatar} alt='avatar' className={styles.avatar} />
                    <div className={styles.bio}>
                        <div className={styles.textos}>
                            <h2>Sobre</h2>

                            <p>Sou <span>Lucas Wilson</span> <br />
                                <strong>Estudante</strong> </p>
                            
                            <p>Sou estudante do cotemig</p>
                        </div>

                    </div>
                </section>
                <div className={styles.techs}>
                    <h3>Techs</h3>
                    <div className={styles.icones}>
                        <img src={html} alt="Ícone do html" />
                        <img src={css} alt="Ícone do css" />
                        <img src={js} alt="Ícone do js" />
                        <img src={react} alt="Ícone do react" />
                        <img src={node} alt="Ícone do node" />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Sobre
