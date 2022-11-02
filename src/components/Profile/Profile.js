import logo from '../../assets/img/admin-logo.jpg';
import profilePic from '../../assets/img/pp.jpeg';

function Profile() {
  return (
    <>
      <div className="row mb-5 justify-content-center align-items-center mx-auto ">
        <img src={logo} alt="" className="w-25" />
        <h6 className="w-50">Admin Panel</h6>
      </div>
      <div className="row justify-content-center my-5 text-center">
        <img src={profilePic} alt="" className="rounded-circle w-50 mb-2" />
        <h6 className="fw-bold">Uğur Okur</h6>
      </div>
      <div className="row my-5 gy-3 ">
      <div className="btn btn-light text-start"> Dashboard</div>
      <div className="btn btn-light text-start" >Customers</div>
      <div className="btn btn-light text-start">Solutions</div>
      <div className="btn btn-light text-start">Settings</div>
      

        {/* <nav>
          <ul>
            <li>Dashboard</li>
            <li>Customers</li>
            <li>Solutions</li>
            <li>Settings</li>
          </ul>
        </nav> */}
        <div>Exit</div>
      </div>
      <div className="row"></div>
    </>
  );
}

export default Profile;
