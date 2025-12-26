function loginUser(){
  let u=username.value;
  let p=password.value;
  if(u==="admin" && p==="1234"){
    window.location="../frontend/admin.html";
  }else{
    alert("Login Successful!");
    window.location="index.html";
  }
  return false;
}
