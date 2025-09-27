import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-semibold">🏠 Home Page</h1>
        <p>This is the Home page of the project.</p>
      </main>
    </div>
  );
}
