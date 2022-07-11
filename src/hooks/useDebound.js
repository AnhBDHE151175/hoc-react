import { useState, useEffect } from 'react';

function useDebound(value, delay) {
    const [debound, setDebound] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setDebound(value), delay);
        return () => {
            clearInterval(handle);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debound;
}

export default useDebound;
