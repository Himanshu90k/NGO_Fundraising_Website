import dashboard_image from '../assets/dashboard_image.png';

const DashboardPage = () => {
    return (
        <>
            <div className="flex items-center justify-between w-190 mt-10 mb-6">
                <h1 className="text-customBlack font-inter text-3xxl font-bold">Dashboard</h1>
                <div className="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 
                        18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 
                        2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#EA4633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#EA4633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-customBlack font-inter text-base font-medium">/  General  /   Dashboard</p>
                </div>
            </div>
            <div className='relative w-190 h-135'>
                <img src={dashboard_image} alt="Dashboard" className="w-full" />
                <div className='w-170 h-36 bg-lightBlue absolute inset-0 flex flex-col justify-center gap-4 top-56 left-10'>
                    <h2 className='text-customRed font-inter text-4xl font-semibold pl-10'>Hello Himanshu Rawat,</h2>
                    <p className='text-white font-inter text-base italic font-medium pl-10'>initial push is the toughest! Go through the learning modules, or reach out to your fundraising manager to level up.</p>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;