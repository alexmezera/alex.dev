export default function Home() {
    return (    
        <main>
        <container className="flex flex-col flex-grow min-h-dvh md:w-2/5 mx-auto py-16">
            <div className="flex flex-initial justify-between items-start py-4 px-2">
                <h1 className="">Alex Mezera</h1>
                <h3 className="">Madison, WI</h3>
            </div>
            <div className="py-4 px-4 text-xl font-bold">
                Education
            </div>
            <EducationBox program={"Computer Sciences for Professionals Capstone"} time={"2023 - 2024"}/>
            <EducationBox program={"BS, Political Science"} time={"2015 - 2019"}/>
            <EducationBox program={"BS, Horticulture"} time={"2015 - 2019"}/>
            <div className="py-4 px-4 text-xl font-bold">
                Skills
            </div>
            <SkillsBox></SkillsBox>
        </container> 
        </main>
        );
}

function EducationBox ({ program, time }) {
    return(
            <div className="grid grid-cols-3 grid-rows-3 py-">
                <div className="col-start-1">UW-Madison</div>
                <div className="col-span-2 row-start-2 px-2">{program}</div>
                <div className="col-start-3 text-right">{time}</div>
            </div>
    );
}

function SkillsBox() {
    return(
        <div className="grid grid-cols-3 grid-rows-3 py-">
            <div className="row-start-1">Java</div>
            <div className="row-start-2">C</div>
            <div className="row-start-3">Python</div>
            <div className="row-start-1 col-start-2">Git</div>
            <div className="row-start-2 col-start-2">Linux/Unix</div>
            <div className="row-start-3 col-start-2">SQL</div>
        </div>
);
}