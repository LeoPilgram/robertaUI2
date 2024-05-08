import BasicSelect from '@/components/Dropdown';

export default function EntertainmentPage() {
  return (
    <div>
      <div>
        <h1 className="text-left text-xl p-4">Entertainment</h1>
        <p className="p-4">Lorem ipsum</p>
      </div>

      <div className="mb-4">
        {' '}
        {/* Add margin bottom to create space */}
        <BasicSelect
          label="Musik"
          options={[
            { value: 1, label: 'Song 1' },
            { value: 2, label: 'Song 2' },
            { value: 3, label: 'Song 3' },
          ]}
        />
      </div>

      <div>
        {' '}
        {/* Another dropdown */}
        <BasicSelect
          label="Tanz"
          options={[
            { value: 1, label: 'Tanz 1' },
            { value: 2, label: 'Tanz 2' },
            { value: 3, label: 'Tanz 3' },
          ]}
        />
      </div>
    </div>
  );
}
