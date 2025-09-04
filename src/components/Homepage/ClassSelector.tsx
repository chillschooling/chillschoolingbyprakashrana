import SubjectCards from './SubjectCards';
import { useState } from 'react';

const classes = ['6th', '7th', '8th', '9th', '10th', '11th', '12th'];

export default function ClassSelector() {
  const [selectedClass, setSelectedClass] = useState<string>('8th');
  return (
    <div>
      <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Choose Your Class</h3>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {classes.map(cls => (
          <button
            key={cls}
            className={`px-4 py-1 rounded-md font-medium ${
              selectedClass === cls ? 'bg-green-500 text-white' : 'bg-white text-green-700 border border-green-500'
            } transition duration-200`}
            onClick={() => setSelectedClass(cls)}
          >
            Class {cls}
          </button>
        ))}
      </div>
      <SubjectCards selectedClass={selectedClass} />
    </div>
  );
}