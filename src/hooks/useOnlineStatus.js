import { useEffect, useState } from 'react';

// 함수 익스폴트
// 온라인 상태인지 아닌지 알려주는애 : navigator.onLine
// useEffect가 있어야 클린업을 할 수 있음
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
