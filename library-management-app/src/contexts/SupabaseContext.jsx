import { createContext, useContext, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';

const SupabaseContext = createContext();

export function SupabaseProvider({ children }) {
    const supabase = useMemo(() => createClient(
        'https://hbiexzkugncltzfeqcsc.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaWV4emt1Z25jbHR6ZmVxY3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0Njc0NzIsImV4cCI6MjA2MzA0MzQ3Mn0.knGtAQpp-tD9km2iSoKT14Eh_V94tX9lO0r5QTgHX9M'
    ), []);

    return (
        <SupabaseContext.Provider value={{ supabase }}>
            {children}
        </SupabaseContext.Provider>
    );
}

export function useSupabase() {
    return useContext(SupabaseContext);
}