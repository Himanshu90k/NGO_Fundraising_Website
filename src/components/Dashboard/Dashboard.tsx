import Navbar from "./Navbar";
import Profile from "./Profile";

interface DashboardProps {
    children: React.ReactNode;
};

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
    return (
        <div className="w-full flex justify-between">
            {/* top bar */}
            <div className="w-full h-20 bg-white inset-0 absolute z-10"></div>

            {/* sidebar */}
            <aside className="w-58 mt-20 h-210 bg-white shadow-aideShadow">

                {/* logo and list button */}
                <div className="w-58 h-20 flex items-center px-5 justify-between bg-white shadow-logoCardShadow">
                    <div className="h-12.5 w-38 rounded-lg border-4 border-solid border-customBlue flex justify-center items-center">
                        <h3 className="text-customBlue font-inter text-base font-bold">Logo</h3>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="1" y="1" width="8.90909" height="8.90909" stroke="black" strokeWidth="2" />
                        <rect x="14.0909" y="1" width="8.90909" height="8.90909" stroke="black" strokeWidth="2" />
                        <rect x="14.0909" y="14.0909" width="8.90909" height="8.90909" stroke="black" strokeWidth="2" />
                        <rect x="1" y="14.0909" width="8.90909" height="8.90909" stroke="black" strokeWidth="2" />
                    </svg>
                </div>

                {/* Dashboard heading */}
                <div className="w-56 h-16 rounded-lg bg-lightRed my-6 mx-4 flex flex-col justify-center py-3.5 px-6">
                    <h3 className="text-customRed font-inter text-sm font-bold">General</h3>
                    <p className="text-customGrey font-inter text-xxs font-normal">Dashboard</p>
                </div>

                {/* navbar */}
                <Navbar />

            </aside>

            <div className="w-full h-full flex flex-col mr-7 gap-7 mt-21">
                {/* profile */}
                <Profile />

                {/* content window */}
                <div className="w-270 h-240 bg-pageColor">
                    { children }
                </div>
            </div>

            {/* bottom bar */}
            <div className="w-full h-16 bg-white bottom-0 fixed z-10">

            </div>
        </div>
    );
};

export default Dashboard;