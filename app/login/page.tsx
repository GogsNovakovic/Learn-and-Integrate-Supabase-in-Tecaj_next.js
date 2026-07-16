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
                            <input type="email" className="input" name="email" placeholder="Email" />
                        </div>
                        
                        <div className="field">
                            <input type="password" className="input" name="password" placeholder="Password" />
                        </div>  

                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}