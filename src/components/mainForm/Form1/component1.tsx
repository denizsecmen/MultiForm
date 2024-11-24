import { useContext } from 'react';
import context from '@/context/context';
export default function Component1() {
  let [progress, chprogress] = useContext(context);
  return (
    <div>
      <button
        onClick={() => {
          chprogress((parseInt(progress) + 1).toString());
        }}
      >
        Change Progress
      </button>
    </div>
  );
}
