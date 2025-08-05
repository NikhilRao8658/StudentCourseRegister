import { useState } from "react";

const StudentRegister = () => {
  const [student, setStudent] = useState({ name: "", email: "", courseType: "" });
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const courseTypes = ["Individual", "Group", "Special"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name && student.email && student.courseType) {
      setStudents([...students, student]);
      setStudent({ name: "", email: "", courseType: "" });
    }
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Register Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
        />
        <select
          name="courseType"
          value={student.courseType}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Course Type</option>
          {courseTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>

      {students.length >= 0 && (
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search students..."
            className="w-full border px-3 py-2 mb-3 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <h3 className="font-semibold">Registered Students:</h3>
          <ul className="">
            {filteredStudents.map((s, idx) => (
              <li key={idx} style={{listStyle:"disc"}}>
                {s.name} ({s.email}) - {s.courseType}
              </li>
            ))}
            {filteredStudents.length === 0 && <li>Register First!</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentRegister;
