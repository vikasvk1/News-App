import React from 'react';

const Spinner = () => {
    return (
        <div className="loader-wrap" role="status" aria-live="polite">
            <div className="loader" />
            <p className="loader-text">Loading latest headlines...</p>
        </div>
    );
};

export default Spinner;
