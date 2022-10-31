
                                        // _____________CALL BACK FUNCTION_______________
// function a(text,formatcb){
//     return typeof formatcb === 'function' ? formatcb(text):text.toUpperCase();
// }
// const result = a('hello',function(text){
// return text.charAt(0).toUpperCase() + text.slice(1)
// })
// console.log(result)



                        //___________________________  STARTING CALL BACK FULL PROGRAM PRACTICE ________________________

// REGISTER
// SEND EMAIL
// LOGIN
// GET USER DATABASE
// DISPLAY USER DATABASE


function register(cb) {
  setTimeout(() => {
    console.log("resgister");
    cb();
  }, 1000);
}

function send_email(cb) {
  setTimeout(() => {
    console.log("send email to user");
    cb();
  }, 1000);
}

function Log_In(cb) {
  setTimeout(() => {
    console.log("User LOGIN");
    cb();
  }, 1000);
}

function Get_User_DataBase(cb) {
  setTimeout(() => {
    console.log("Get User From DataBase");
    cb();
  }, 1000);
}

function Display_User_DataBase() {
  setTimeout(() => {
    console.log("Display User From Database");
    
  }, 1000);
}
                         // ________________________________________METHOD CALL BACK HELL______________________________________________

register(() => {
  send_email(() => {
    Log_In(() => {
      Get_User_DataBase(() => {
        Display_User_DataBase();
      });
    });
  });
});

              // ___________________________________________________ PROMISES IN JS _________________________________________________________



// REGISTER
// SEND EMAIL
// LOGIN
// GET USER DATABASE
// DISPLAY USER DATABASE

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // return reject (' WHILE REGISTRATION ----'); //reject use when catch use
      console.log("register all");
      resolve();
    }, 1000);
  });
}

function send_email() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // return reject (' WHILE SENDING EMAIL ----'); //reject use when catch use
        console.log("send_email");
        resolve();
      }, 1000);
    });
}

function Log_In() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log(" Log_In");
        resolve();
      }, 1000);
    });
}

function Get_User_DataBase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Get_User_DataBase");
        resolve();
      }, 1000);
    });
}

function Display_User_DataBase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(" Display_User_DataBase");
        resolve();
      }, 1000);
    });
}
                    // _________________________________________________________  PROMISIS METHOD  ___________________________________________________________

register()
  .then(send_email)
  .then(Log_In)
  .then(Get_User_DataBase)
  .then(Display_User_DataBase)
  .catch((err)=>{
        console.log ('ERROR : ',err)
  })

 // _________________________________________________________  ASYNC AWAIT METHOD  ___________________________________________________________

async function authentication(){
   try{
    const msg = await register();
    await send_email();
    await Log_In();
    await Get_User_DataBase();
    await Display_User_DataBase();
    
   }
   catch(err){
    console.log(err);
    throw new Error();
   }
}
authentication().then(()=>{
    console.log('all SET');
}).catch((err)=>{
console.log(err)
});

console.log("other application");
