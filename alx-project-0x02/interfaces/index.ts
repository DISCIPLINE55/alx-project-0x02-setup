export interface CardProps {
  title: string;
  content: string;
}

// Add PostModalProps
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

// Add ButtonProps
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

// Add PostProps
export interface PostProps {
  id: number;
  title: string;
  body: string;
}
