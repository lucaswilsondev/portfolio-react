import Container from '../../compoents/Container'
import styles from './contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
            <Container>
                <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>

                    <div className={styles.icones}>
                        
                        <a href='mailto:lucaswilsonprofissional@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://github.com/lucaswilsondev' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='https://www.linkedin.com/in/lucas-wilson-97086226b/?trk=opento_sprofile_topcard' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                    </div>

                </section>
            </Container>
        </>
    )
}

export default Contatos
