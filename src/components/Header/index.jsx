import logo from "../../assets/FoodApp.svg";
import style from "./styles.module.css";

export const Header = () => {
    return(
        <header className={style.header}>
            <img src={logo} alt="Logo Food App" />
        </header>
    )
};
