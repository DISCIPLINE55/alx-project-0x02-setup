import Header from "@/components/layout/Header";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">🏠 Home Page</h1>
        <p>Welcome to the Home page!</p>
        <Card title="Sample Card" content="This is a sample card component." />
      </main>
    </div>
  );
}
