import styles from "./Banner.module.css"
import bannerImg from "../../assets/imagem-banner.jpg"

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.tituloBanner}>Gilmore Gilrs</h1>
                <p className={styles.paragrafoBanner}> Uma série de comédia dramática que 
                acompanha Lorelai Gilmore, uma mãe solteira independente, e sua filha Rory. 
                Vivendo na peculiar cidade de Stars Hollow, a trama explora o forte 
                vínculo entre as duas,além de suas relações amorosas, dilemas 
                profissionais e o reencontro tenso com a família de alta sociedade</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.bannerImg} src={bannerImg} alt="Imagem do banner" />
            </div>
        </div>
    )
}

export default Banner;