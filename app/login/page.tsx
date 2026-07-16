import { signInAction } from "@/actions/auth";
import { SectionTitle } from "@/components/sectionTitle";

export default function RegisterPage () {
    return (
        <section className="pad-section">
            <div className="container">
                <div className="stack">
                    <SectionTitle
                       eyebrow="Students"
                       title="Login"
                       description="Use your email and password to login"
                    ></SectionTitle>

                    <form action={signInAction} className="stack-md panel">

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