import Header from "../components/layout/Header";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center">
          🚀 Welcome to ALX Project 0x02
        </h1>
        <p className="text-center mt-4">
          Next.js + TypeScript + Tailwind setup is complete!
        </p>
      </main>
    </div>
  );
}
