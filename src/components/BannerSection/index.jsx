import bannerImg from "../../assets/ImgBanner.png";
import styles from "./styles.module.css";

export const BannerSection = () => {
    return(
        <section className={styles.bannerSection}>
            <div className={styles.divInfosSection}>
                <h1 className="titleOne">Descubra o melhor <span>aplicativo de comida</span></h1>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>

                <a href="#" className={styles.btnSection}>Saiba mais</a>
            </div>

            <div className={styles.divImgSection}>
                <img className={styles.imgBanner}
                    src={bannerImg} 
                    alt="Imagem com uma montagem de três fotos de comidas, 
                    sendo: pizza, sanduíche e comida japonesa." 
                />
            </div>
        </section>
    )
};
