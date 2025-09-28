export interface ButtonProps{
    label : string;
    type : "primary" | "secondary" | "order";
    onClick ?: () => void;
    totalCost ?: number;
}

export const Button = ({label, type, onClick, totalCost} : ButtonProps) => {
    return(
        <button
            className={`font-medium px-4 py-2 
                ${type === "primary" ? 'bg-neutral-50 text-black hover:bg-neutral-200 rounded-sm text-xl cursor-pointer' : ''}
                ${type === "secondary" ? 'text-xl cursor-pointer' : ''}
                ${type === "order" ? 'border border-dashed bg-neutral-500 text-white cursor-pointer' : ''}
                ${totalCost === 0 ? 'cursor-not-allowed' : ''}
            `}
            disabled={totalCost === 0 ? true : false}
            onClick={onClick}
        >
            {label}
        </button>
    )
}