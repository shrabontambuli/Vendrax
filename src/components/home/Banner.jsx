import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}>
            <div className="hero-overlay bg-opacity-35"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl text-white">
                    <h1 className="mb-5 text-4xl md:text-6xl font-bold">Welcome To MISX</h1>
                    <p className="mb-5">
                    MIS is Management Information System. In the context of banking and finance, MIS refers to a system used to collect, store, and analyze data to assist in decision-making.
                    </p>
                    <Link to='/'>
                    <button className="btn-pri">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;