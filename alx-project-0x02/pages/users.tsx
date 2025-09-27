import Header from "@/components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

interface UsersPageProps {
  users: UserProps[];
  error?: string;
}

export default function UsersPage({ users, error }: UsersPageProps) {
  if (error) {
    return (
      <div>
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">👥 Users Page</h1>
          <div className="text-center py-8">
            <p className="text-lg text-red-600">Error: {error}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">👥 Users Page</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();

    return {
      props: {
        users,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    return {
      props: {
        users: [],
        error: error instanceof Error ? error.message : "An error occurred",
      },
    };
  }
}