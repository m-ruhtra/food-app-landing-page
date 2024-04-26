import icon from "../../assets/IconAboutSection.svg";
import styles from "./styles.module.css";

export const AboutSection = () => {
    return(
        <section className={styles.sectionAbout}>
            <div className={styles.divHeaderSection}>
                <img src={icon} alt="Imagem-ícone da seção sobre o aplicativo."/>
                <h1 className="titleOne">Sobre o <span>aplicativo</span></h1>
            </div>

            <div className={styles.divContent}>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </section>
    )
}
