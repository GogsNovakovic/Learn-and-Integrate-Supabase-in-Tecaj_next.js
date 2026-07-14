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

    if (error) {
        return {error: error.message};
    }

    if (!data.user) {
        return {error: "Not sussessful"}
    }

    const fullName = `${firstName} ${lastName}`;
    
    const {error: profileError} = await supabase.from('students').insert({
        user_uuid: data.user.id,
        full_name: fullName,
        country: country,
        skill_level: skillLevel
    })

    if (profileError) {
        return {error: "desila se greska"}
    }
} 