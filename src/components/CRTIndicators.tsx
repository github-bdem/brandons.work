function CRTIndicators() {
    return (
        <div className="crt-indicators">
            <div className="indicator-group">
                <div className="indicator-light power active"></div>
                <span className="indicator-label">PWR</span>
            </div>
            <div className="indicator-group">
                <div className="indicator-light signal pulse"></div>
                <span className="indicator-label">SIG</span>
            </div>
            <div className="indicator-group">
                <div className="indicator-light standby"></div>
                <span className="indicator-label">STBY</span>
            </div>
        </div>
    );
}

export default CRTIndicators;
