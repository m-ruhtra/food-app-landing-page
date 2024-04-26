import { 
    AboutSection, 
    BannerSection, 
    DefaultTemplate, 
    FormSection, 
    RestaurantSection 
} from "../../components";

export const HomePage = () => {
    return(
        <>
            <DefaultTemplate>
                <BannerSection/>
                <RestaurantSection/>
                <AboutSection/>
                <FormSection/>
            </DefaultTemplate>
        </>
    )
}