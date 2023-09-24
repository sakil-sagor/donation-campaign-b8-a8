
const Banner = () => {
    return (
        <div className="text-center mt-24 pb-24">
            <h2 className="text-4xl font-bold  mb-8">I Grow By Helping People In Need</h2>
            <div >
                <input placeholder="Search here..." className="border p-2 rounded-l-md" type="text" />
                <button className="bg-[#FF444A] p-2 rounded-r-md border">Search</button>
            </div>
        </div>
    );
};

export default Banner;