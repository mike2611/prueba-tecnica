import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = () => (
  <div className="d-flex align-items-center justify-content-center">
    <div className="purple progress-nums">
      <p className="text-white mx-4">1</p>
    </div>
    <ProgressBar variant="primary" now={50} className="progress mx-2" />
    <div className="purple progress-nums">
      <p className="text-white mx-4">2</p>
    </div>
    <ProgressBar variant="primary" now={0} className="progress mx-2" />
    <div className="purple progress-nums">
      <p className="text-white mx-4">3</p>
    </div>
    <ProgressBar variant="primary" now={0} className="progress mx-2" />
    <div className="purple progress-nums">
      <p className="text-white mx-4">4</p>
    </div>
  </div>
);

export default Progress;
