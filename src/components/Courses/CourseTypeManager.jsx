import { useState } from 'react';

const CreateCourseType = ({ onAddCourseType }) => {
  const [newType, setNewType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newType.trim()) {
      onAddCourseType(newType.trim());
      setNewType('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={newType}
        onChange={(e) => setNewType(e.target.value)}
        placeholder="New Course Type"
        className="border rounded px-2 py-1"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Add
      </button>
    </form>
  );
};

const CourseTypeManager = () => {
  const [courseTypes, setCourseTypes] = useState(["Individual", "Group"]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAddCourseType = (newType) => {
    setCourseTypes([...courseTypes, newType]);
  };

  const handleDelete = (index) => {
    const updated = [...courseTypes];
    updated.splice(index, 1);
    setCourseTypes(updated);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditValue(courseTypes[index]);
  };

  const handleUpdate = () => {
    if (editValue.trim()) {
      const updated = [...courseTypes];
      updated[editIndex] = editValue.trim();
      setCourseTypes(updated);
      setEditIndex(null);
      setEditValue('');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Manage Course Types</h2>
      <CreateCourseType onAddCourseType={handleAddCourseType} />
      <ul className="mt-4 space-y-2">
        {courseTypes.map((type, index) => (
          <li key={index} className="bg-white shadow rounded p-3 flex justify-between items-center">
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="border rounded px-2 py-1 mr-2"
              />
            ) : (
              <span>{type}</span>
            )}
            <div className="space-x-2">
              {editIndex === index ? (
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(index)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypeManager;
