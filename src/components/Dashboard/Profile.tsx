import profile from '../../assets/profile.png';

const Profile = () => {
    return (
        <div className='mr-9 ml-auto flex h-9 items-center gap-3'>
            <img src={profile} alt='profile' />
            <div>
                <h2 className='text-customBlack font-inter text-base font-bold'>Himanshu Rawat</h2>
                <div className='flex items-center gap-1'>
                    <p className='text-customBlack font-inter text-sm font-normal'>Fundraiser</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M4 5.207L7.854 1.354L7.147 0.645996L4 3.793L0.853996 0.645996L0.145996 1.354L4 5.207Z"
                            fill="#444A55" fillOpacity="0.8"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Profile;