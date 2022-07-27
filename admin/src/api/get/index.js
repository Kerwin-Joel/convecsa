export const login = async({username,password})=>{

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  console.log(username,password);

  const raw = JSON.stringify({
    email:username,
    password
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const request = await fetch(`http://localhost:4000/api/login`,requestOptions);

  const response = await request.json();
  console.log(response);

}