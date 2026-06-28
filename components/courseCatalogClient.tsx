"use client";

import { type Course, instructors } from "@/lib/data";
import { useMemo } from "react";
import { useState } from "react";
import { CourseCard } from "./courseCard";

function instructorNameForCourse(course: Course): string {
  return (
    instructors.find((instructor) => instructor.slug === course.instructorSlug) ?.name ?? "Unknown Instructor"
  )
}

export default function CoursesCatalogClient({ courses, categories, levels }:{
    courses: Course[];
    categories: string[];
    levels: string [];
}) {

  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState<string>("");
  const filtered = useMemo (() => {
    const q = query.trim().toLowerCase()
    return courses.filter( (course) => {
      const matchesQuery = q === "" || course.title.toLowerCase().includes(q);
      const matchesCategory = category === "all" || course.category === category;

      return matchesQuery && matchesCategory
    } )
}, [courses, query, category]);

  const resetFilters = () => {
      setQuery("");
      setCategory("all")
  };

  const isFiltering = query !== "" || category !== "all";

  return (
    <div className="stack-md">

      <div className="panel">
        <div className="grid-filters">
          <div className="field">
            <label htmlFor="course-search" className="field-label">Search by title</label>
            <input type="text" className="input" id="course-search" placeholder="e.g. Next.js" 
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            ></input>
          </div>

          <div className="field">
            <label htmlFor="course-category" className="field-label">Category</label>
            <select className="select" 
            id="course-category"
            onChange={(e) => setCategory(e.target.value)}
            value = {category}
            >
              <option value="all">All</option>
              {categories.map((c) =>(
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

            <div className="filter-bar">
              {isFiltering ? (
                <button className = "btn-link" onClick={(resetFilters)}>Reset filters</button>
              ): null}
            </div>
      </div>

      <div className="grid-cards">

        {filtered.map((course) => (
            <CourseCard
            key={course.id} 
            course={course} 
            instructorName={instructorNameForCourse(course)}>
                
            </CourseCard>
        ))}
      </div>
    </div>
)
};