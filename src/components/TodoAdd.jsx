import { useRef, useState } from 'react';

export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = useState('');
  // 랜더링과 관련없이 id값 저장을 위해 ref사용
  const idRef = useRef(0);

  function handleAdd() {
    // 공백제거후 값이 있을때만 추가
    if (txt.trim()) {
      idRef.current++;
      // 할일 추가시 입력필드 초기화
      setTxt('');
      setTodos([
        ...todos,
        {
          id: idRef.current,
          text: txt,
          done: false,
        },
      ]);
    }
  }

  function handleEnter(e) {
    // console.log(e.key);
    if (e.key === 'Enter') handleAdd();
  }

  return (
    <div className="flex my-[10px] gap-x-[10px]">
      <input
        type="text"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        className="w-full border-[#ddd] rounded-[4px] text-gray-600"
        onKeyUp={handleEnter}
      />
      <button
        type="button"
        onClick={handleAdd}
        className="bg-gray-600 text-white px-[10px] rounded-[4px]"
      >
        Add
      </button>
    </div>
  );
}
