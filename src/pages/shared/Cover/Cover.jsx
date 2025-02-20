
const Cover = ({ img, title }) => {
    return (
        <div
            className="hero h-[400px] bg-fixed md:h-[650px] mb-12"
            style={{
                backgroundImage: `url("${img}")`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl bg-black bg-opacity-30 px-16 py-12">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;