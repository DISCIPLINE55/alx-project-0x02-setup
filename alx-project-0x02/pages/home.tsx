import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">🏠 Home Page</h1>
        <p>Welcome to the Home page!</p>
      </main>
    </div>
  );
}
