"use client";

import { useEffect, useState } from 'react';

export default function CursorLoader() {
  const [Comp, setComp] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    import('./InteractiveCursor').then(mod => {
      if (mounted) setComp(() => mod.default ?? mod);
    });
    return () => { mounted = false; };
  }, []);

  if (!Comp) return null;
  const C = Comp;
  return <C />;
}
