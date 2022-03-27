import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Progress = ({ first, second, third }) => {
  const [progFirst, setFirst] = useState(0);
  const [progSecond, setSecond] = useState(0);
  const [progThird, setThird] = useState(0);

  useEffect(() => {
    setFirst(first);
    setSecond(second);
    setThird(third);
  }, [progFirst, progSecond, progThird]);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="purple progress-nums">
        <p className="text-white mx-4">1</p>
      </div>
      <ProgressBar variant="primary" now={progFirst} className="progress mx-2" />
      <div className="purple progress-nums">
        <p className="text-white mx-4">2</p>
      </div>
      <ProgressBar variant="primary" now={progSecond} className="progress mx-2" />
      <div className="purple progress-nums">
        <p className="text-white mx-4">3</p>
      </div>
      <ProgressBar variant="primary" now={progThird} className="progress mx-2" />
      <div className="purple progress-nums">
        <p className="text-white mx-4">4</p>
      </div>
    </div>
  );
};

Progress.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  third: PropTypes.number.isRequired,
};
export default Progress;
