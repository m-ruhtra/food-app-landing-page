import icon from "../../assets/IconRestaurantSection.svg";
import { dataRestaurants } from "../../database/dataRestaurants";
import { RestaurantList } from "./RestaurantList";
import styles from "./styles.module.css";

export const RestaurantSection = () => {
    return(
        <section className={styles.sectionRestaurants}>
            <div className={styles.divContentSection}>
                <div className={styles.divHeaderSection}>
                    <img src={icon} alt="Imagem-ícone da seção de restaurantes famosos." />
                    <h1 className="titleTwo">Restaurantes famosos</h1>
                </div>

                <div>
                    <RestaurantList restaurantList={dataRestaurants}/>
                </div>
            </div>
        </section>
    )
};
