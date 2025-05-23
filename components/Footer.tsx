import { GENERAL_INFO } from '@/lib/data';

// interface RepoStats {
//     stargazers_count: number;
//     forks_count: number;
// }

const Footer = async () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    {/* TODO: Fix fetch error and show credit */}
                    {/* <a href='https://www.me.toinfinite.dev/' className="leading-none text-muted-foreground hover:underline hover:text-white">
                        Design & built by Tajmirul Islam <br />
                        Revised by Dobin Shin
                    </a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
