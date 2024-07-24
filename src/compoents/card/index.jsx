import styles from './card.module.css'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <h1>Confira:</h1>
                </div>
                <Link to={html_url} className={styles.botao}>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Card
