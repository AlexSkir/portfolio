'use server';

import { cookies } from 'next/headers';

export async function setCookie(name, value, options = {}) {
  cookies().set(name, value, options);
}

export function getCookie(name) {
  return cookies().get(name);
}
