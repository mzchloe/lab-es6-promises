// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /* getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */

  
// Iteration 1 - using callbacks

//adding the last <li>\
  let addStep6 = "Mashed potatoes are ready!";

  mashedPotatoes.push(addStep6);

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => { 
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            /* let addStep6 = "Mashed potatoes are ready!";

            mashedPotatoes.push(addStep6); ---> did not work and have to move it outside above
            
            */

            getInstruction('mashedPotatoes', 6, (step6) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
            }, (error) => console.log(error));
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      },(error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));



// Iteration 2 - using promises

//adding the last <li>
let addStep8 = "Steak is ready!";

steak.push(addStep8);

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
      obtainInstruction('steak', 1)
        .then( (step1) => {
          document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
            obtainInstruction('steak', 2)
              .then( (step2) => {
                document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
                obtainInstruction('steak', 3)
                .then( (step3) => {
                  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
                  obtainInstruction('steak', 4)
                  .then( (step4) => {
                    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
                     obtainInstruction('steak', 5)
                      .then( (step5) => {
                        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
                          obtainInstruction('steak', 6)
                           .then( (step6) => {
                             document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                              obtainInstruction('steak', 7)
                                .then( (step7) => {
                                  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                                   obtainInstruction('steak', 8)
                                    .then( (step8) => {
                                      document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
                                      document.querySelector("#steakImg").removeAttribute("hidden");
                          })
                          .catch((err) => console.log((err)));
                     })
                     .catch((err) => console.log((err)));
                })
                .catch((err) => console.log((err)));
            })
            .catch((err) => console.log((err)));
          })
          .catch((err) => console.log((err)));
        })
        .catch((err) => console.log((err)));
      })
      .catch((err) => console.log((err)));
    })
    .catch((err) => console.log((err)));
  })
  .catch((err) => console.log((err)));
  

// Iteration 3 using async/await

//Adding the last <li>
let addStep9 = "Broccoli is ready!"

broccoli.push(addStep9);

async function makeBroccoli() {
  
 /*  const step0 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  
  const step1 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
 
  const step2 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
 
  const step3 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
 
  const step4 = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
 
  const step5 = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
 
  const step6 = await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
 
  const step7 = await obtainInstruction('broccoli', 7);
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
 
  const step8 = await obtainInstruction('broccoli', 8);
  document.querySelector("#broccoli").innerHTML += `<li>${step8}</li>`
 
  const Step9 = await obtainInstruction('broccoli', 9);
  document.querySelector("#broccoli").innerHTML += `<li>${step9}</li>`
  

  //Not correct way to run this because we are accessing directly into the data.js, which 
  //we do not have access to, we should access the data via the function obtainInstruction itself
  //if the broccoli that we are trying to get has been changed, we will not get any results
  //but if we use the function, who will access the data for us, it will always be accessible

//for (let i=0; i < 8; i++) {
  
  //await obtainInstruction('broccoli', [i]);

    //document.querySelector('#broccoli').innerHTML += `<li>${broccoli[i]}</li>` 
  //}
   
//}   */

//Correct way:
for (let i = 0; i < 8; i++){

  const step = await obtainInstruction('broccoli', i);

  document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
}
makeBroccoli()

// Bonus 2 - Promise all
// ...