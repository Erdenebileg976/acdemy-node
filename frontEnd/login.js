const addBtn = document.getElementById("submit");

const blogs = [];

const addBtnFunc = async () => {
  const asd = document.getElementById("email");
  const gggg = document.getElementById("password");

  const email = asd.value;
  const password = gggg.value;

  console.log(email, "email");
  console.log(password, "password");

  const response = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

addBtn.addEventListener("click", addBtnFunc);
