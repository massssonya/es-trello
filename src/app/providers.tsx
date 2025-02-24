"use client";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "shared/theme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useEffect, useState } from "react";

// Создаем кастомный cache для MUI
const cache = createCache({ key: "mui", prepend: true });

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Устанавливаем mounted в true после монтирования компонента
  useEffect(() => {
    setMounted(true);
  }, []);

  // Пока компонент не смонтирован, просто возвращаем детей
  if (!mounted) return <>{children}</>;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
