import { NavLink, Route } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";

const sellerRoutes = [
    {
        id: 1,
        route: "/dashboard/my-products",
        title: "My Products",
        icon: <MdOutlineInventory2 />,
    },
    {
        id: 2,
        route: "/dashboard/add-products",
        title: "Add Products",
        icon: <IoAddCircleOutline />,
    },
];

const Sidebar = () => {

    const { LogOut } = useAuth();
    const userData = useUserData();


    return (
        <div className="bg-gray-200 border-r border-black min-h-screen px-8 py-16">
            <h1 className="text-3xl font-bold mb-8 text-center">Gadget Shop</h1>
            <ul className="flex flex-col gap-2">
                <li className="p-2 border border-black rounded-md">
                    <NavLink to='/dashboard/overview' className="flex items-center gap-3 px-16">
                        <GrOverview />
                        <p>Overview</p>
                    </NavLink>
                </li>

                {
                    userData.role === "seller" && sellerRoutes.map((route) => (
                        <li key={route.id} className="p-2 border border-black rounded-md">
                            <NavLink to={route.route} className="flex items-center gap-3 px-16">
                                <p>{route.title}</p>
                            </NavLink>
                        </li>
                    ))
                }

                <li className="p-2 border border-black rounded-md">
                    <NavLink to='/' className="flex items-center gap-3 px-16">
                        <IoHomeOutline />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className="p-2 border border-black rounded-md" onClick={() => LogOut()}>
                    <NavLink className="flex items-center gap-3 px-16">
                        <CgLogOut />
                        <p>LogOut</p>
                    </NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Sidebar;