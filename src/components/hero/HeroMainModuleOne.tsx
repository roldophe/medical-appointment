const HeroMainModuleOne: React.FC = () => {


    return (
        <div className="hidden md:block ptablet:scale-90 ltablet:scale-90 absolute -bottom-12 left-8 bg-white dark:bg-gray-800 border border-muted-200 dark:border-muted-700 rounded-xl p-5 shadow-xl shadow-muted-400/10">
            <div className="flex justify-between mb-4">
                <h3 className="font-heading font-medium text-muted-800 dark:text-white">
                    Patients
                </h3>
                <span className="font-sans text-sm text-muted-400 dark:text-gray-400">4 New</span>
            </div>
            <div className="flex justify-between items-center gap-4">
                <img
                    className="object-cover w-12 h-12 mask mask-blob"
                    src="https://media.cssninja.io/shuriken/avatars/2.svg"
                    alt="Patient Avatar"
                    width="48"
                    height="48"
                />
                <img
                    className="object-cover w-12 h-12 mask mask-blob"
                    src="https://media.cssninja.io/shuriken/avatars/4.svg"
                    alt="Patient Avatar"
                    width="48"
                    height="48"
                />
                <img
                    className="object-cover w-12 h-12 mask mask-blob"
                    src="https://media.cssninja.io/shuriken/avatars/3.svg"
                    alt="Patient Avatar"
                    width="48"
                    height="48"
                />
                <img
                    className="object-cover w-12 h-12 mask mask-blob"
                    src="https://media.cssninja.io/shuriken/avatars/6.svg"
                    alt="Patient Avatar"
                    width="48"
                    height="48"
                />
            </div>
        </div>
    );
}
export default HeroMainModuleOne;