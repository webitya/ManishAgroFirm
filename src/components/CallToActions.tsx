const CallToActions= () => {
    return(
        <div className="px-8 py-24 bg-[#4c956c] flex flex-col gap-2 items-center justify-center">
            <h2 className="text-3xl font-semibold text-white text-center">
                Try our Products you are bound to love it
            </h2>
            <p className="text-white text-center"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fuga.</p>
            <button 
                className={`text-2xl bg-[#1f2937] rounded-3xl px-4 py-2 text-white transform 
                transition-transform hover:scale-105 w-52`}
            >
                <span>Get In Touch</span>
            </button>
        </div>
    );
}

export default CallToActions;