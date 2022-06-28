import './counter.css'

function Counter({count}){
    return (
        <div className="counter">
            {count}
        </div>
    )
}

export {Counter}