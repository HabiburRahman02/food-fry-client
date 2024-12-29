import Cover from "../../shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTitle from "../../../components/SectionTitle";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Cover title='Our Menu' img={menuImg}></Cover>
            <SectionTitle
                heading='Todays offer'
                subHeading='Do not miss this'
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={desserts} img={dessertImg} title='Desserts'></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title='Pizzas'></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title='Salads'></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title='Soups'></MenuCategory>


        </div>
    );
};

export default Menu;