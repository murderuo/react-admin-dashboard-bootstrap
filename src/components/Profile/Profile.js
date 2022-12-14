import logo from '../../assets/img/admin-logo.jpg';
import profilePic from '../../assets/img/pp.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faScrewdriverWrench,
  faHouse,
  faPeopleGroup,
  faHouseMedicalCircleCheck,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used

function Profile() {
  return (
    <>
      <div className="mb-5 d-flex justify-content-center align-items-center mx-auto ">
        <img src={logo} alt="" className="w-25" />
        <h6 className="w-50 ">Admin Panel</h6>
      </div>
      <div className="d-flex flex-column align-items-center my-5 ">
        <img src={profilePic} alt="" className="rounded-circle w-50 mb-2" />
        <h6 className="fw-bold">Uğur Okur</h6>
      </div>
      <div className=" d-flex flex-column my-5 gy-2 gap-2 justify-content-center">
        <div className="btn btn-light text-md-center text-lg-start  fs-5 w-75">
          <FontAwesomeIcon
            icon={faHouse}
            size={'xs'}
            style={{ marginRight: '5px' }}
          />
          Dashboard
        </div>
        <div className="btn btn-light text-md-center text-lg-start  fs-5 w-75">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size={'xs'}
            style={{ marginRight: '5px' }}
          />
          Customers
        </div>
        <div className="btn btn-light text-md-center text-lg-start  fs-5 w-75">
          <FontAwesomeIcon
            icon={faHouseMedicalCircleCheck}
            size={'xs'}
            style={{ marginRight: '5px' }}
          />
          Solutions
        </div>
        <div className="btn btn-light text-md-center text-lg-start  fs-5 w-75">
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            size={'xs'}
            style={{ marginRight: '5px' }}
          />
          Settings
        </div>
      </div>
      <div className="flex-row">
        <div className="text-center text-lg-start ms-lg-4 ">
          <FontAwesomeIcon icon={faRightFromBracket} size={'xs'} />
          Exit
        </div>
      </div>
    </>
  );
}

export default Profile;
