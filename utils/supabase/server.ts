import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const createClient =(
    cookieStore: Awaited<ReturnType<typeof cookies>>
) =>{
    return createServerClient(supabaseURL!, supabaseKey!, { cookies: {
        getAll() {
            return cookieStore.getAll();
        },
        setAll(cookieToTest) {
            try {
            cookieToTest.forEach(({name, value, options}) => 
            cookieStore.set(name, value, options));
            }
            catch (error) {
                console.error("Error setting cookies:", error);
            }
        }
    } })
}

export async function createServerSupabaseClinet() {
    const cookieStore = await cookies();
    return createClient(cookieStore);
}