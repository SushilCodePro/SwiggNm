import Card from "./Card";

const Home = ({ resto }) => {

    return (
        <div className=" flex gap-2 flex-wrap m-4">
            {resto.map((item) => (
                <div key={item.info.id} className="">
                    <Card item={item} />
                </div>
            ))}

        </div>
    );
}
export default Home;