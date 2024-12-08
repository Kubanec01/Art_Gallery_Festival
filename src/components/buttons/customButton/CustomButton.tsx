
type CustomButtonProps = {
    title: string;
    href: string;
    className?: string;
}

export const CustomButton = ({title, href, className}:CustomButtonProps) => {
    return (
        <button
        className={`flex justify-center items-center ${className}`}
        >
            <a href={href}>
                {title}
            </a>
        </button>
    )
}