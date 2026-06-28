
import CoursesCatalogClient from "@/components/CourseCatalogClient";
import { getAllCourses, getCourseCategories, getCourseLevels } from "@/lib/data";
import { SectionTitle } from "@/components/sectionTitle";

export default function Courses() {

    const courses = getAllCourses();
    const categories = getCourseCategories();
    const levels = getCourseLevels();

    return(
        <section className="pad-section">
            <div className="container">
                <div className="stack">
                

                    <SectionTitle
                        eyebrow = "Catalog"
                        title = "All courses"
                        description = "Browse every course in catalog">
                    </SectionTitle>

                    <CoursesCatalogClient 
                    courses={courses}
                    categories={categories}
                    levels={levels}
                    />

                </div>
            </div>

        </section>
    );
};
