import styles from "./styles.module.css";

export const RestaurantCard = ({restaurant}) => {
    return(
        <li className={styles.card}>
            <div>
                <img className={styles.imgCard}
                    src={restaurant.img} 
                    alt={restaurant.imgAlt} 
                />
            </div>

            <div className={styles.divInfosCard}>
                <h1 className="titleRestaurant">{restaurant.name}</h1>
                <p className="paragraph">{restaurant.description}</p>
            </div>
        </li>
    )
};
