import { Dispatch } from 'redux';
// @ts-ignore
import { isAdminAction } from '../action.ts';
// @ts-ignore
import { URI } from '../lib/constantes.ts';
// @ts-ignore

export async function checkIsAdmin(userAddress: string, dispatch: Dispatch) {
  const headers = new Headers({
    'Content-Type': 'text/plain',
    'X-Custom-Header': 'ProcessThisImmediately',
    Authorization: `bearer ${userAddress}`,
  });

  const url = `http://${URI.LOCAL}/admin/is_admin`;

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    dispatch(isAdminAction(data.isAdmin));
  } catch (error) {
    console.error(error);
  }
}
