import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faStar,
  faCircleHalfStroke,
  faAnglesUp,
  faUpRightFromSquare,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

function Engagement() {
  return (
    <>
      <div className="col-lg-4 col-md-12">
        <div className="row">
          <div className="fw-bold fs-4 pt-5">Engagement</div>
        </div>
        <div className="row">
          <div className="py-5 w-100 text-break fs-6">
            General statistic of user
            <span className="fw-bold">engagement</span> process
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-12 ">
        <div className="row p-3 h-100  align-items-center flex-md-wrap">
          <div
            className="col  rounded-4 bg-light m-2 position-relative shadow-lg"
            style={{ height: '60%' }}
          >
            <div
              className="row position-absolute icon-bg rounded justify-content-center p-1 w-25 top-0 start-25 translate-middle-y "
              style={{ left: '30px' }}
            >
              <FontAwesomeIcon icon={faBolt} color={'white'} />
            </div>
            <div className="row py-3 px-2 mt-2 fw-bold" style={{fontSize:'12px'}}>This Day</div>
            <div className="row py-2 px-2 fs-3 fw-bolder">
              133
              <FontAwesomeIcon
                icon={faArrowUp}
                color={'green'}
                style={{ display: 'inline', width: '10px' }}
              />
            </div>
          </div>
          <div
            className="col border rounded-4 bg-light m-2 position-relative shadow-lg"
            style={{ height: '60%' }}
          >
            <div
              className="row position-absolute icon-bg  rounded justify-content-center p-1 w-25 top-0 start-25 translate-middle-y "
              style={{ left: '30px' }}
            >
              <FontAwesomeIcon icon={faCircleHalfStroke} color={'white'} />
            </div>
            <div className="row py-3 px-2 mt-2 fw-bold" style={{fontSize:'12px'}}>This Week</div>
            <div className="row py-2 px-2 fs-3 fw-bolder">
              133
              <FontAwesomeIcon
                icon={faArrowUp}
                color={'green'}
                style={{ display: 'inline', width: '10px' }}
              />
            </div>
          </div>
          <div
            className="col border rounded-4 bg-light m-2 position-relative shadow-lg"
            style={{ height: '60%' }}
          >
            <div
              className="row position-absolute icon-bg  rounded justify-content-center p-1 w-25 top-0 start-25 translate-middle-y "
              style={{ left: '30px' }}
            >
              <FontAwesomeIcon icon={faStar} color={'white'} />
            </div>
            <div className="row py-3 px-2  mt-2 fw-bold" style={{fontSize:'12px'}}>This Month</div>
            <div className="row py-2 px-2 fs-3 fw-bolder ">
              133
              <FontAwesomeIcon
                icon={faArrowDown}
                color={'red'}
                style={{ display: 'inline', width: '10px' }}
              />
            </div>
          </div>
          <div
            className="col border rounded-4 bg-light m-2 position-relative shadow-lg"
            style={{ height: '60%' }}
          >
            <div
              className="row position-absolute icon-bg  rounded justify-content-center p-1 w-25 top-0 start-25 translate-middle-y "
              style={{ left: '30px' }}
            >
              <FontAwesomeIcon icon={faAnglesUp} color={'white'} />
            </div>
            <div className="row py-3 px-2  mt-2 fw-bold" style={{fontSize:'12px'}}>This Year</div>
            <div className="row py-2 px-2 fs-3 fw-bolder">
              133
              <FontAwesomeIcon
                icon={faArrowDown}
                color={'red'}
                style={{ display: 'inline', width: '10px' }}
              />
            </div>
          </div>
          <div
            className="col border rounded-4 bg-light m-2 position-relative shadow-lg"
            style={{ height: '60%' }}
          >
            <div
              className="row position-absolute icon-bg  rounded justify-content-center p-1 w-25 top-0 start-25 translate-middle-y "
              style={{ left: '30px' }}
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} color={'white'} />
            </div>
            <div className="row py-3 px-2 mt-2 fw-bold "style={{fontSize:'12px'}}>Pending</div>
            <div className="row py-2 px-2 fs-3 fw-bolder">133</div>
          </div>
        </div>
      </div>

      {/* <div className="engagement-bg rounded p-3">asd</div> */}
      {/* </div> */}
    </>
  );
}

export default Engagement;
