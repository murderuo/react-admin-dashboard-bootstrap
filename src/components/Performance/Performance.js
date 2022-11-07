import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faAnglesRight,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

function Performance() {
  return (
    <>
      <div className="col performance-bg rounded text-light p-3 m-2">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between fw-bold">
            Performance
            <FontAwesomeIcon
              icon={faAnglesRight}
              size={'xs'}
              // style={{ marginRight: '5px' }}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-5">
            <div className="fs-4 m-2 p-2 fw-bold d-flex flex-column justify-content-center">
              76%
              <span style={{ fontSize: '10px' }} className="fw-light">
                income
              </span>
            </div>
          </div>
          <div className="col-2">
            <div className="text-center fs-4 m-2 p-2">|</div>
          </div>
          <div className="col-5">
            <div className="fs-4 m-2 p-2 fw-bold d-flex flex-column justify-content-center">
              24%
              <span style={{ fontSize: '8px' }} className="fw-light">
                income
              </span>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <ul className="list-unstyled d-flex flex-column gap-4">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                color={'#fc4c24'}
                size={'xl'}
                style={{ marginRight: '10px' }}
              />
              Spending Course
              <FontAwesomeIcon icon="fa-solid fa-circle-check" />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                color={'#61d9e0'}
                size={'xl'}
                style={{ marginRight: '10px' }}
              />
              Deposit programs
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                color={'#d5b6a4'}
                size={'xl'}
                style={{ marginRight: '10px' }}
              />
              Cashback programs
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Performance;
