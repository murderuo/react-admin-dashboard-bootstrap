import ExampleCharts from "../SampleChart";


function Activity() {
  return (
    <div className="col p-3 activity-bg text-light rounded m-2">
      <div className="row">
        <div>
          <div className="nav nav-tabs nav-not-border align-items-center">
            <a href="#" className="link">Activity</a>
            <a href="#" className="link">Clicks</a>
            <a href="#" className="link">Sales</a>
            
          </div>
        </div>
      </div>
      <div className="row p-3 h-100">
        <div className="text-dark"><ExampleCharts/></div>
      </div>
    </div>
  );
}

export default Activity;
