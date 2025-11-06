import fs from "fs";
// import { Batch } from "mongodb/lib/bulk/common";
// import { userInfo } from "os";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readUsers(): users.txt-ээс унших
function readUsers() {
  if (!fs.existsSync("users.txt")) return [];

  const data = fs.readFileSync("users.txt", "utf-8").trim();

  return data.split("\n").map((line) => {
    const [username, pin, balance] = line.split(",");
    return { username, pin, balance: parseInt(balance) };
  });
  // 👉 Хэрэглэгчийн мэдээллийг унших код
}



// writeUsers(): users.txt-д бичих
function writeUsers(users) {
  const line = users.map((u) => ` ${u.username}, ${u.pin}, ${u.balance}`);
  fs.writeFileSync("users.txt", line.join(" \n "));
}

// logTransaction(): transactions.txt-д бичих
function logTransaction(username, type, amount) {
  // 👉 Гүйлгээний лог бичих код
}

// =======================
// Register (шинэ хэрэглэгч)
// =======================
function register() {
  const user = readUsers();

  rl.question("Нэвтрэх нэрээ оруулна уу", (username) => {
    rl.question("name ", (name) => {
      rl.question("password", (pin) => {
        const newUser = { username, pin, balance };
        user.push(newUser);
        writeUsers(user);
      });
    });
  });
  // 👉 Шинэ хэрэглэгчийн нэр асуух
  // 👉 PIN код асуух
  // 👉 Эхний үлдэгдэл асуух  
 // 👉 users.txt-д хадгалах 
}

// =======================
// Login + Menu
// =======================
function login() {
  const user = readUsers();
  
  rl.question("Нэвтрэх нэрээ оруулна уу", (username) => {
      rl.question("password oruulna оруулна уу", (pass) => {
   
      
        for(const element of  user){
          if(element.username === username && element.pin === pass) {
          console.log("success")
            showMenu()
          }else{
            console.log("false")
            exit()
          }
        }
     
      })
        
     });

  // 👉 Нэвтрэх нэр асуух
  // 👉 PIN код асуух
  // 👉 Хэрэглэгчийн мэдээллийг шалгах
  // 👉 showMenu дуудаж ажиллуулах
}

function showMenu(user) {
  // 👉 Menu-г харуулах
  // 1. Үлдэгдэл шалгах
  // 2. Мөнгө нэмэх
  // 3. Мөнгө авах
  // 4. Гарах
  // 👉 Хэрэглэгчийн сонголтоор switch case ашиглах


  

  // 👉 Нэвтрэх нэр асуух
  // 👉 PIN код асуух
  // 👉 Хэрэглэгчийн мэдээллийг шалгах
  // 👉 showMenu дуудаж ажиллуулах
}

// =======================
// Main
// =======================
console.log("==== ATM SYSTEM ====  1. Нэвтрэх 2. Бүртгүүлэх ");

rl.question("Сонголтоо оруулна уу: ", (startChoice) => {
  if (startChoice === "1") {
    login();
  } else if (startChoice === "2") {
    register();
  } else {
    console.log("⚠️ Буруу сонголт!");
    rl.close();
  }
});