import MenuItem from "../../Home/MenuItem/MenuItem";
import Cover from "../../shared/Cover/Cover";

const MenuCategory = ({ items, img, title }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="mx-auto text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase mb-6">Order Now Please</button>
            </div>
        </div>
    );
};

export default MenuCategory;