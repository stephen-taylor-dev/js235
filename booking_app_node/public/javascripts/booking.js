/*

run function on form submission
stop default behavior
get form data
serialize form data // use FormData
// check if inputs valid
//   alert if any of form data is empty
no need to check on client side as server is handling it in this
exercise

create post request
  method of post
  headers not needed because of FormData
  body is serialized data
  submit if valid

on successful response alert user with response data

*/

function formDatatoJson(formData) {
  return Object.fromEntries(formData.entries());
}

async function addStaff(event) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const json = JSON.stringify(formDatatoJson(data));

  let res = await fetch('/api/staff_members', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: json,
  });

  if (res.status === 201) {
    const confirmation = await res.json();
    alert(`New Staff created with id: ${confirmation.id}`);
    event.currentTarget.reset();
  } else {
    let message = await res.text();
    alert(message);
  }

}


document.addEventListener("DOMContentLoaded", event => {
  document.querySelector('form').addEventListener('submit', addStaff);
});