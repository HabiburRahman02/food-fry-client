
const FoodCard = ({ item }) => {
    const { name, recipe, image } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="mx-auto text-center">
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;