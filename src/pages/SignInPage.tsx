import SignInForm from "../components/auth/SignInForm";
import Metadata from "../lib/Metadata";

const SignInPage: React.FC = () => {

        return (
            <div className="signin-page">
            <Metadata
                title="Sign In"
                description="Sign in to your account on our website"
                keywords="React, Sign In, Example App, Frontend"
                author="KHOEM RADOM"
                url="https://example.com/signup"  // Set URL for this page
                thumbnail="https://example.com/assets/images/signup-thumbnail.jpg"  // Optional: Add thumbnail for social sharing
            />
            <SignInForm />
        </div>
    )
}

export default SignInPage;