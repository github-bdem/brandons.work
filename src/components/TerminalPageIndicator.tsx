interface TerminalPageIndicatorProps {
    pageTitle: string;
}

function TerminalPageIndicator({ pageTitle }: TerminalPageIndicatorProps) {
    return (
        <div className="terminal-header mb-8">
            <span className="terminal-indicator"></span>
            <span className="terminal-text">{pageTitle}</span>
        </div>
    );
}

export default TerminalPageIndicator;
