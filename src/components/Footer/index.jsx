import styles from "./styles.module.css";

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.divContentFooter}>
                <p className="paragraph">Todos os direitos reservados - 
                    Arthur Miguel Rodrigues / Kenzie Academy Brasil - 2024
                </p>
            </div>
        </footer>
    )
};
