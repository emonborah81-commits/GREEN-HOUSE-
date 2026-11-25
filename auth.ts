import { supabaseServer } from './supabase/server';
export type Role='captain'|'vice_captain'|'volunteer'|'teacher';
export async function currentManager(){
 const s=await supabaseServer(); const {data:{user}}=await s.auth.getUser();
 if(!user) return null;
 const {data:profile}=await s.from('management_profiles').select('role').eq('user_id',user.id).maybeSingle();
 return profile?{user,role:profile.role as Role}:null;
}
export function canEdit(role:Role){return ['captain','vice_captain','teacher'].includes(role)}
export function canAdmin(role:Role){return ['captain','teacher'].includes(role)}
