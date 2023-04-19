interface ButtonProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    console.log(props)
    const cor = props.cor ?? 'gray'
    return(
        <button onClick={props.onClick} className={`
        bg-gradient-to-r from-${cor}-100 to-${cor}-300
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}