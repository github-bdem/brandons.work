type CFButtonSizes = "regular" | "sm";
type CFButtonTypes = "primary" | "secondary";

interface CFButtonProps {
    url: string;
    label: string;
    variant?: CFButtonSizes;
    buttonType?: CFButtonTypes;
}

function CFButton({ url, label, variant = "regular", buttonType = "primary" }: CFButtonProps) {
    const sizeClasses = variant === "sm" ? "text-xs py-2 px-4" : "text-sm py-3 px-6";
    const typeClasses = buttonType === "secondary" ? "btn-secondary" : "btn-primary";
    
    return (
        <a
            className={`btn ${typeClasses} ${sizeClasses} inline-flex items-center justify-center`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="font-semibold tracking-wider">
                {label}
            </span>
        </a>
    );
}

export default CFButton;