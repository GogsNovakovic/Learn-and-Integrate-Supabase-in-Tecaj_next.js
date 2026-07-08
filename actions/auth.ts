"use server";

import { createServerSupabaseClinet } from "@/utils/supabase/server";

export async function signUpAction (
    formData: FormData
) {
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const country = formData.get("country");
    const skillLevel = formData.get("skill_level"); 

    const supabase = await createServerSupabaseClinet();
    const { data, error} = await supabase.auth.signUp({
        email, password
    });
}