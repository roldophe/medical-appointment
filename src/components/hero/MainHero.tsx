import ButtonMain from "../../common/ButtonMain";
import ButtonSub from "../../common/ButtonSub";
import HeroMainModuleOne from "./HeroMainModuleOne";

const MainHero: React.FC = () => {
    return (

        <div
            className="min-h-screen w-full overflow-hidden bg-muted-100 dark:bg-muted-1000"
        >
            <div className="min-h-screen w-full max-w-7xl mx-auto flex items-center px-4">
                <div className="w-full grid grid-cols-12">
                    {/* Left Section */}
                    <div className="col-span-12 ltablet:col-span-5 lg:col-span-5">
                        <div className="h-full ptablet:max-w-lg ptablet:mx-auto flex items-center mb-8 ltablet:mb-0 lg:mb-0">
                            <div className="text-center ltablet:text-left lg:text-left font-sans space-y-4">
                                <h1 className="font-medium text-4xl ptablet:text-5xl lg:text-5xl text-muted-800 dark:text-white">
                                    We help you find the Doctor you need
                                </h1>
                                <p className="text-lg text-muted-500 dark:text-muted-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc
                                    incredibile, quod beatissimum. Quamquam te quidem video minime
                                    esse deterritum.
                                </p>
                                <div className="w-full flex items-center justify-center ltablet:justify-start lg:justify-start gap-2">
                                    <ButtonMain to={"/"} className="min-w-[130px]">
                                        Get Started
                                    </ButtonMain>
                                    <ButtonSub to={"/"} className="min-w-[130px]">
                                        Explore
                                    </ButtonSub>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="relative col-span-12 ltablet:col-span-7 lg:col-span-7">
                        <img
                            src="src/assets/images/illustrations/hero.svg"
                            className="block w-full ltablet:max-w-[540px] max-w-[620px] mx-auto"
                            alt="Hero illustration"
                        />
                        <img
                            src="src/assets/images/illustrations/hero-dark.svg"
                            className="hidden w-full ltablet:max-w-[540px] max-w-[620px] mx-auto"
                            alt="Hero illustration"
                        />
                        {/* Decorative Elements */}
                        <div className="absolute top-6 left-0 h-14 w-14 hidden md:flex items-center justify-center rounded-full text-2xl bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/50">
                            💊
                        </div>
                        <div className="absolute top-24 left-24 h-10 w-10 hidden md:flex items-center justify-center rounded-full text-2xl bg-white dark:text-muted-100 dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/50">
                            ⚕️
                        </div>
                        <div className="absolute -bottom-10 right-0 h-16 w-16 hidden md:flex items-center justify-center rounded-full text-4xl bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/50">
                            💉
                        </div>
                        <div className="absolute -top-12 left-1/3 h-16 w-16 hidden ptablet:hidden md:flex items-center justify-center rounded-full text-4xl bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/50">
                            🦠
                        </div>
                        {/* Patient Information Card */}
                        <HeroMainModuleOne/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHero;
