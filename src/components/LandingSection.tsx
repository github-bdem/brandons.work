function LandingSection() {
    return (
        <div className="flex h-full shrink-0 snap-start items-center justify-center">
            <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center px-8">
                <div className="w-full text-center">
                    <div className="mb-4 inline-flex">
                        <div className="terminal-header">
                            <span className="terminal-indicator"></span>
                            <span className="terminal-text">SYSTEM.INIT</span>
                        </div>
                    </div>

                    <h1
                        className="glitch mb-6 text-3xl font-black tracking-wider md:text-4xl"
                        data-text="BRANDON'S WORK"
                    >
                        <span className="">BRANDON&apos;S</span>
                        <span className="text-secondary ml-4">WORK</span>
                    </h1>

                    <div className="tech-border mx-auto mb-6 max-w-2xl p-6">
                        <p className="terminal-text text-sm leading-relaxed">
                            {`My name is Brandon and I've been doing development
                            since 2012. I specialize in front end engineering
                            and have worked in both startups and corporate
                            environments, led teams and efforts, and have built
                            projects using a wide variety of tools and frameworks.`}
                        </p>
                    </div>

                    <div className="flex justify-center gap-4">
                        <a className="btn btn-primary" href="#">
                            <span className="text-sm tracking-wider uppercase">
                                [ LINKEDIN ]
                            </span>
                        </a>
                        <a className="btn btn-secondary" href="#">
                            <span className="text-sm tracking-wider uppercase">
                                [ GITHUB ]
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingSection;
