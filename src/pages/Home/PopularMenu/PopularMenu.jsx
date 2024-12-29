import axios from "axios";
import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('menu.json')
            .then(data => {
                const popularMenu = data.data.filter(item => item.category === 'popular');
                setMenu(popularMenu)
            })
    }, [])
    return (
        <section className="my-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="mx-auto text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>        </section>
    );
};

export default PopularMenu;