import { type UserProps } from "../../interfaces";

export default function UserCard({ id, name, email, address, phone, website }: UserProps) {
  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Address:</span> {address.street}, {address.city} {address.zipcode}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Website:</span> {website}
        </p>
      </div>
      <p className="text-xs text-gray-400 mt-2">User ID: {id}</p>
    </div>
  );
}