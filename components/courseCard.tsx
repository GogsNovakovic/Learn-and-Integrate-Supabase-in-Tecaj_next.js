import Link from "next/link"
import type { Course } from "@/lib/data";

export function CourseCard ({
    course,
    instructorName
} : {
    course: Course;
    instructorName: string;

}) {
    return (
        <Link
            key={course.id}
            href={`/courses/${course.slug}`}
            className="card-link"
          >
            <div className="badge-row">
                <span className="badge badge--brand">{course.category}</span>
                <span className="badge">{course.level}</span>
            </div>

            <h3 className="card-link-title">{course.title}</h3>
            <p className="card-link-body">{course.shortDescription}</p>

            <dl className="card-meta">
                <div>
                    <dt>Lessons</dt>
                    <dd>{course.lessonsCount}</dd>
                </div>
                <div>
                    <dt>Duration</dt>
                    <dd>{course.duration}</dd>
                </div>

                <div className="card-footer">
                  <span>By {instructorName}</span>
                  <span className="card-footer-cta">View Course</span>
                </div>

            </dl>

          </Link>
    )
}
