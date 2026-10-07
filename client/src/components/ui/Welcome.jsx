function Welcome({ name = "Campus Student", message }) {
    return (
        <div className="welcome-content">
            <h2>Hello, {name}!</h2>
            <p>{message}</p>
        </div>
    );
}

export default Welcome;
