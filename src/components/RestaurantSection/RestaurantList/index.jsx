import { RestaurantCard } from "./RestaurantCard";
import styles from "./styles.module.css";

export const RestaurantList = ({restaurantList}) => {
    return(
        <ul className={styles.ulSectionRestaurants}>
            {restaurantList.map((restaurant) => {
                return(
                    <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
                )
            })}
        </ul>
    )
};
