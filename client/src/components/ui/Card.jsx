function Card({
    title,
    description,
    children,
    className = "",
}) {
    return (
        <div className={`card ${className}`}>
            {title && (
                <h3 className="card-title">
                    {title}
                </h3>
            )}

            {description && (
                <p className="card-description">
                    {description}
                </p>
            )}

            {children && (
                <div className="card-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Card;