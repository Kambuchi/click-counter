import './button.css'

function Button({label, add, onClick }){
    return (
        <button 
        className={add ? 'add' : 'restart'}
        onClick={onClick}>
            {label}
        </button>
    )
}

export {Button}