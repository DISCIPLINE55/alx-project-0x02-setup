import Header from "../components/layout/Header";
import Button from "../components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold mb-4">ℹ️ About Page</h1>
        <p className="mb-6">This page demonstrates reusable Button components.</p>

        <div className="flex gap-4">
          <Button label="Small" size="small" shape="rounded-sm" />
          <Button label="Medium" size="medium" shape="rounded-md" />
          <Button label="Large" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
}
