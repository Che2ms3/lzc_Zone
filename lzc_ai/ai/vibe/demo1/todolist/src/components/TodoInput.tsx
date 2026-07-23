import { useState } from "react";

type TodoInputProps = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="输入待办事项..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-base
                   outline-none transition-colors
                   focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
      />
      <button
        onClick={handleSubmit}
        className="rounded-lg bg-blue-500 px-5 py-2 text-white
                   transition-colors hover:bg-blue-600 active:bg-blue-700"
      >
        添加
      </button>
    </div>
  );
}
