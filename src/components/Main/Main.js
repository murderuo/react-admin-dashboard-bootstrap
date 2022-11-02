import Performance from '../Performance/';
import Activity from '../Activity';
import Engagement from '../Engagement';
import Profile from '../Profile/';

function Main() {
  return (
    <div className="container h-100 my-md-5">
      <div className="row rounded bg-light" style={{ height: '600px' }}>
        <div className="col-md-3 bg-light rounded p-4">
          <Profile />
        </div>
        <div className="col-md-9 bg-1 rounded">
          <div className="row">
            <div className="col-4 p-3">
              <Performance />
            </div>
            <div className="col-8 p-3">
              <Activity />
            </div>
          </div>
          <div className="row p-3">
            <Engagement />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
