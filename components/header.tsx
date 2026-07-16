 import { signOutAction } from "@/actions/auth";
import { createServerSupabaseClient } from "@/utils/supabase/server";
 import Link from "next/link"       
       export async function Header () {

        const supabase = await createServerSupabaseClient();
        const { data: {user}} = await supabase.auth.getUser();


        return (
            <header className="site-header">
          <div className="container site-header-inner">

            <Link href="/" className="site-logo">
              <span className="site-logo-mark">L</span>
              <span>LearnHub</span>
            </Link>

            <form action="/search" method="get" className="header-search">
            
            <input 
            type="search"
            name="q"
            id="header-search-q"
            placeholder="Search courses..."
            className="input header-search-input"
            autoComplete="off"
            ></input>
            
            <button type="submit" className="btn btn-primary btn-sm">Search</button>
            </form>

            <nav className="site-nav">
            <a href="/" className="site-nav-link">Home</a>
            <a href="/courses" className="site-nav-link">Courses</a>
            <a href="/instructors" className="site-nav-link">Instructors</a>
            

            {user ? (
              < form action={signOutAction}>
                <button type="submit">Logout</button>
              </form>
            ) : (
              <div>
                <a href="/login" className="site-nav-link">Login</a>
              <a href="/register" className="site-nav-link">Register</a>
              </div>
              
            )
            }
          </nav>
          </div>
        </header>
        )
       } 
        