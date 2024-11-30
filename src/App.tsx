import './assets/scss/tailwind.scss'
import './assets/scss/app.scss'
function App() {
  const config = import.meta.env.VITE_API_URL;
  return (
    <h1 className="text-3xl font-bold underline">
      config = {config}
    </h1>
  )
}

export default App