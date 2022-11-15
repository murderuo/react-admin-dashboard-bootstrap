import Performance from '../Performance/';
import Activity from '../Activity';
import Engagement from '../Engagement';
import Profile from '../Profile/';

function Main() {
  return (
    <div
      className="container h-100 rounded-4 bg-light my-md-5"
      style={{ height: '600px' }}
    >

      <div className="row rounded-4 bg-light  ">
        <div className="col-md-3 p-4 ">
          <Profile />
        </div>
        <div className="col-md-9 bg-1 rounded-4 p-3">
          <div className="row g-0">
            <div className="col-lg-5 col-md-12 ">
              <Performance />
            </div>
            <div className="col-lg-7 col-md-12">
              <Activity />
            </div>
          </div>
          <div className="row p-3 engagement-bg m-2 rounded">
            <Engagement />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
