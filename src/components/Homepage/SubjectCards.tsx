const subjectsPerClass: Record<string, string[]> = {
  '6th': ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Science'],
  '7th': ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Science'],
  '8th': ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Science'],
  '9th': ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Science'],
  '10th': ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Science'],
  '11th': ['Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science'],
  '12th': ['Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science'],
};

export default function SubjectCards({ selectedClass }: { selectedClass: string }) {
  const subjects = subjectsPerClass[selectedClass] || [];
  return (
    <div>
      <h4 className="text-lg font-semibold text-blue-700 mb-2 text-center">Subjects for Class {selectedClass}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {subjects.map(sub => (
          <div
            key={sub}
            className="p-4 bg-white rounded-lg shadow-md text-center text-green-800 font-medium hover:scale-105 transition duration-200 border border-blue-100"
          >
            {sub}
          </div>
        ))}
      </div>
    </div>
  );
}