import fs from "node:fs/promises";

const getUsers = async () => {
  const userRawData = await fs.readFile("../dara", "utf-8");

  const users = JSON.parse(userRawData);

  return users;
};

export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, "aaa");
  console.log(password, "asdasd");

  const users = await getUsers();

  const user = users.find((value) => {
    return value.username === username && value.password === password;
  });
  if (!user) {
    res.send("username eswel password buruu bn!");
  } else {
    res.send("Success");
  }
};
