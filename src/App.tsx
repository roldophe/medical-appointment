import Metadata from "./lib/Metadata"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <div className="home-page">
      <Metadata
        title="Home"
        description="Welcome to the HomePage of our React Application"
        keywords="React, Home, Example App, Frontend"
        author="KHOEM RADOM"
        url="https://example.com/home"  // Set URL for this page
        thumbnail="https://example.com/assets/images/home-thumbnail.jpg"  // Optional: Add thumbnail for social sharing
      />
      <main>
        <HomePage/>
      </main>
    </div>
  )
}

export default App