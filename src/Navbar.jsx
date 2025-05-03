const Navbar=()=>{

    return(
        <>
            <div className="border p-1 flex justify-between items-center">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" 
                    alt="Food logo" 
                    className=" h-16 w-16"
                    />
                </div>
                <ul className=" flex gap-4">
                    <li>Name</li>
                    <li>Name</li>
                    <li>Name</li>
                    <li>Name</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;