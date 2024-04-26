import styles from "./styles.module.css";

export const FormSection = () => {
    return(
        <section className={styles.sectionForm}>
            <div className={styles.divContentSection}>
                <h1 className="titleTwo">Conheça nosso aplicativo</h1>

                <form className={styles.formSection}>
                    <div className={styles.divInputsForm}>
                        <input className={styles.inputForm} type="text" placeholder="Nome" required/>
                        <input className={styles.inputForm} type="email" placeholder="E-mail" required/>
                    </div>

                    <button className={styles.btnForm}>Saiba mais</button>
                </form>
            </div>
        </section>
    )
};
