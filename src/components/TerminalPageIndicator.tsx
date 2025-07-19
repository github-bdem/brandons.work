interface TerminalPageIndicatorProps {
    pageTitle: string;
}

function TerminalPageIndicator({ pageTitle }: TerminalPageIndicatorProps) {
    return (
        <div className="technical-header">
            <span className="technical-indicator pulse"></span>
            <span>{pageTitle}</span>
        </div>
    );
}

export default TerminalPageIndicator;