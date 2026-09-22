import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import RequirementForm from "./components/RequirementForm";
import RequirementFormAppScript from "./components/RequirementFormAppScript";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16">

        <Hero />

        <Pricing />

        <RequirementForm />

        <RequirementFormAppScript />

      </main>

    </div>
  );
}

export default App;