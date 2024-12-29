import axios from "axios";
import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

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

            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;