type CFButtonSizes = "regular" | "sm";

interface CFButtonProps {
    url: string;
    label: string;
    variant?: CFButtonSizes;
}

function CFButton({ url, label, variant }: CFButtonProps) {
    const buttonStyling =
        variant === "sm"
            ? "btn btn-sm tech-button-small"
            : "btn btn-primary tech-button";
    return (
        <a
            className={buttonStyling}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="button-corner top-left"></span>
            <span className="button-corner top-right"></span>
            <span className="button-corner bottom-left"></span>
            <span className="button-corner bottom-right"></span>
            <span
                className={`tracking-wider uppercase ${variant === "sm" ? "text-xs" : ""}`}
            >{`[ ${label} ]`}</span>
        </a>
    );
}

export default CFButton;
