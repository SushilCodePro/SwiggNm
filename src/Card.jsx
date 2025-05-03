const Card = ({ item }) => {
    // const { info } = item;
    const {name,cloudinaryImageId,avgRating, cuisines}= item?.info;
    return (
        // <>
        <div className=" w-48 h-96 rounded shadow shadow-gray-400 p-2">
            <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt=""
                className="w-40 rounded"
            />
            <p className="font-bold">{name}</p>
            <p className="text-emerald-500">{avgRating}</p>
            <p className="text-gray-600">{cuisines.join(' ,')}</p>
        </div>
        // </>
    )
}

export default Card;