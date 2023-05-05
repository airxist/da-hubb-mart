const Button = ({click, category}) => {
    const handleClick = (event) => {
        click(event);
        // resetting();
    }
    return (
        <div className="select">
            {
                category.map(item => {

                    return (
                        <button className="btn" type="button" key={item} data-id={item} onClick={handleClick}>
                            <svg className="btn-svg">
                                <rect></rect>
                            </svg>
                            {item[0].toUpperCase() + item.slice(1)}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Button;