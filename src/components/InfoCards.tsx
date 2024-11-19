import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Cards from './Cards';

const InfoCards = () => {
  return (
    <div className="bg-[#f2f2f2] py-24 px-6">
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
        {/* Office Address Card */}
        <Cards title="Office Address" para="Hajam Dundigara, Namkum, Ranchi, Jharkhand, 835221">
          <BusinessIcon className="text-[#4c956c] w-16 h-16" />
        </Cards>

        {/* Mail Address Card */}
        <Cards title="Mail Address" para="MainshArgoFirm@gmail.com">
          <EmailIcon className="text-[#4c956c] w-16 h-16" />
        </Cards>

        {/* Contact Number Card */}
        <Cards title="Contact Number" para="+91 9304404578">
          <PhoneAndroidIcon className="text-[#4c956c] w-16 h-16" />
        </Cards>
      </div>
    </div>
  );
};

export default InfoCards;
