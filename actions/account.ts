"use server";
import createSupabaseServerClient from "@/lib/supabase/server";

export async function getShop() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("account").select("*");
  console.log(data);
  if (error) {
    return { status: "Error!", data: error };
  } else return { status: "Success!", data: data };
}

export async function getAccount(id:number) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("account").select("*").eq("id", id);
  if (error) {
    return { status: "Error!", data: error };
  } else return { status: "Success!", data: data };
}

