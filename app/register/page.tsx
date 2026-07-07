import { signUpAction } from "@/actions/auth";
import { SectionTitle } from "@/components/sectionTitle";

export default function RegisterPage () {
    return (
        <section className="pad-section">
            <div className="container">
                <div className="stack">
                    <SectionTitle
                       eyebrow="Students"
                       title="Create an account"
                       description="All field are required"
                    ></SectionTitle>

                    <form action={signUpAction} className="stack-md panel">

                        <div className="field">
                            <input type="text" className="input" 
                            name="first_name" placeholder="First Name" />
                        </div>

                        <div className="field">
                            <input type="text"
                            className="input"
                            name="last_name" placeholder="Last Name" />
                        </div>
                        
                        <div className="field">
                            <input type="email" className="input" name="email" placeholder="Email" />
                        </div>
                        
                        <div className="field">
                            <input type="password" className="input" name="password" placeholder="Password" />
                        </div>  

                        <div className="field">
                            <input type="text" className="input" name="country" placeholder="Country" />
                        </div>
                        
                        <div className="field">
                            <select className="select"  name="skill_level">
                            <option value="begginer">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>  
                        </select>
                        </div>
                        

                        <button type="submit" className="btn btn-primary">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}