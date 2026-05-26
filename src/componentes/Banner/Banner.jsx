import styles from "./Banner.module.css"
import imagemLogo from '../../assets/imagem-logo.png'

const Banner = () =>{
    return( 
            <div className={styles.imagens}>
                <img 
                    className={styles.imagemLogo}
                    src={imagemLogo} 
                    alt="minha foto portfolio" />
            </div>
    )
}

export default Banner