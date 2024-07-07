interface DropdownProps {
  items: { id: number; name: string }[];
  type: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({ items, type }) => {
  return (
    <select
      className="select w-full max-w-xs bg-accent"
      defaultValue={type}
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
