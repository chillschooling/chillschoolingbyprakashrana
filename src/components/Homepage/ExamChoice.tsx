import ClassSelector from './ClassSelector';
import { useState } from 'react';

const exams = ['CBSE', 'JEE', 'NEET'];

export default function ExamChoice() {
  const [selected, setSelected] = useState<string | null>('CBSE');

  return (
    <div>
      <div className="flex justify-center gap-6 mb-8">
        {exams.map(exam => (
          <button
            key={exam}
            className={`px-6 py-2 rounded-lg font-semibold text-lg shadow ${
              selected === exam ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'
            } transition-colors duration-200`}
            onClick={() => setSelected(exam)}
          >
            {exam}
          </button>
        ))}
      </div>
      {selected === 'CBSE' && <ClassSelector />}
      {/* You can add JEE/NEET components later */}
    </div>
  );
}