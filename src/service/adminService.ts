import { Dispatch } from 'redux';
import { isAdminAction } from '../action.ts';

export async function checkIsAdmin(userAddress: string, dispatch: Dispatch) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

  const formData: FormData = new FormData();
  formData.append('address', userAddress)

  const myRequest = new Request('admin/is_admin', {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: formData
  });

  try {
    const response = await fetch(myRequest);
    const data = await response.json();
    dispatch(isAdminAction(data.isAdmin));
  } catch (error) {
    console.error(error);
  }
}