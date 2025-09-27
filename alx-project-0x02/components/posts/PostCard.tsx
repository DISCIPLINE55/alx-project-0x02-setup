import { PostProps } from "../../interfaces";

export default function PostCard({ id, title, body }: PostProps) {
  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
      <p className="text-xs text-gray-400 mt-2">Post ID: {id}</p>
    </div>
  );
}
