interface DropdownProps {
  items: { id: number; name: string }[];
  type: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({ items, type }) => {
  return (
    <select className="select w-full max-w-xs bg-accent">
      <option disabled selected>
        {type}
      </option>
      {items.map((name) => (
        <option key={name.id}>{name.name}</option>
      ))}
    </select>
  );
};

export default DropdownMenu;
