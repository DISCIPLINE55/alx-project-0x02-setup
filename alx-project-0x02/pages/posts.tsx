import Header from "@/components/layout/Header";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

interface PostsPageProps {
  posts: PostProps[];
  error?: string;
}

export default function PostsPage({ posts, error }: PostsPageProps) {
  if (error) {
    return (
      <div>
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">📝 Posts Page</h1>
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
        <h1 className="text-2xl font-bold mb-6">📝 Posts Page</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    // Limit to first 9 posts for display
    const posts = data.slice(0, 9);

    return {
      props: {
        posts,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    return {
      props: {
        posts: [],
        error: error instanceof Error ? error.message : "An error occurred",
      },
    };
  }
}
