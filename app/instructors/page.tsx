import { SectionTitle } from "@/components/sectionTitle";
import { getAllInstructors } from "@/lib/data";
import Link from "next/link";

function initials (name: string): string {
    return name 
        .split (" ")
        .map ((part) => part[0])
        .filter (Boolean)
        .slice (0, 2)
        .join ("")
        .toUpperCase()        
}

export default function Instructors() {
    const instructorsList = getAllInstructors();

    return(
        <section className="pad-section">
            <div className="container">
                <div className="stack">
                      
                <SectionTitle
                    eyebrow = "team"
                    title = "Meet the instructors"
                    description="Working engineers and designers who teach the courses you see on LearnHub."
                >
                    

                </SectionTitle>

                    <div className="grid-cards">
                        {instructorsList.map((instructor) => (
                            <Link
                            key = {instructor.id}
                            href = {`/instructor/${instructor.slug}`}
                            className="card-link"
                            >

                                <div className="instructor-row">
                                    <div className="avatar">
                                        {initials(instructor.name)}
                                    </div>
                                    <div>
                                        <h3 className="instructor-card-name">{instructor.name}</h3>
                                        <p className="instructor-card-role">{instructor.specialty}</p>
                                    </div>
                                </div>

                                <p className="instructor-card-bio">{instructor.shortBio}</p>

                                <p className="instructor-card-cta">View Profile</p>

                            </Link>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};
