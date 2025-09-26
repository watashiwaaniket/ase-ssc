export interface ButtonProps{
    label : string;
    type : "primary" | "secondary";
}

export const Button = ({label, type} : ButtonProps) => {
    return(
        <button
            className={` text-xl font-medium px-4 py-2 rounded-sm cursor-pointer
                ${type == "primary" ? 'bg-neutral-50 text-black hover:bg-neutral-200' : ''}
                ${type == "secondary" ? '' : ''}
            `}
        >
            {label}
        </button>
    )
}