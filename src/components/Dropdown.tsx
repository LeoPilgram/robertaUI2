interface DropdownProps {
  items: { id: number; name: string }[];
  type: string;
  onSelect: (value: string) => void; // Hinzufügen eines neuen Props für den Ereignishandler
}

const DropdownMenu: React.FC<DropdownProps> = ({
  items,
  type,
  onSelect,
}) => {
  return (
    <select
      className="select w-full max-w-xs bg-accent"
      defaultValue={type}
      onChange={(e) => onSelect(e.target.value)} // Verwenden des onSelect Ereignishandlers
    >
      <option disabled value={type}>
        {type}
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
