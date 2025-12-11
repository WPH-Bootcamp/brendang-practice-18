const TodoItem = ({
  text,
  onDelete,
}: {
  text: string;
  onDelete: () => void;
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px",
      }}
    >
      <span>{text}</span>
      <button
        onClick={onDelete}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Hapus
      </button>
    </div>
  );
};

export default TodoItem;
