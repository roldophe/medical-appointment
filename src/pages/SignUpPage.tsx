import SignUpForm from "../components/auth/SignUpForm";
import Metadata from "../lib/Metadata";

const SignUpPage: React.FC = () => {
    return (
        <div className="signup-page">
        <Metadata
            title="Sign Up"
            description="Sign up for an account on our website"
            keywords="React, Sign Up, Example App, Frontend"
            author="KHOEM RADOM"
            url="https://example.com/signup"  // Set URL for this page
            thumbnail="https://example.com/assets/images/signup-thumbnail.jpg"  // Optional: Add thumbnail for social sharing
        />
        <SignUpForm />
    </div>
    )
}

export default SignUpPage;