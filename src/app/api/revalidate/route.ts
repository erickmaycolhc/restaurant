import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest){
  revalidatePath("/");
  return Response.json({success: true});



}

