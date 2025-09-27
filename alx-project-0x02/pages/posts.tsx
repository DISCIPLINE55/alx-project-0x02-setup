import Header from "../components/layout/Header";
import PostCard from "../components/posts/PostCard";
import { PostProps } from "../interfaces";

const samplePosts: PostProps[] = [
  { id: 1, title: "First Post", body: "This is the body of the first post." },
  { id: 2, title: "Second Post", body: "Another interesting post goes here." },
  { id: 3, title: "Third Post", body: "Content of the third post is displayed." },
];

export default function PostsPage() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">📝 Posts Page</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {samplePosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}
