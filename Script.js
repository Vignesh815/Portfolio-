// function sendMail(){
//     let parms = {
//             name: document.getElementById("name").value,
//             email: document.getElementById("email").value,  
//             subject: document.getElementById("subject").value,
//             message: document.getElementById("message").value
// }
//    emailjs.send("service_rql0puj","template_ikdf6mq", parms).then(alert("Email Sent Successfully!"))
// }



// document.getElementById("submit").addEventListener("submit", function(event) {
//    event.preventDefault();

//      const name = document.getElementById("name").value.trim();
//      const email = document.getElementById("email").value.trim();
//      const message = document.getElementById("messsage").value.trim();


//      const serviceId = service_rql0puj;
//      const templateId = template_ikdf6mq;

//      emailjs.send(serviceId, templateId, {
//       name: name,
//       email: email,
//       message: message,
//      })
     
//      then((reset) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//       alert("Email Sent Successfully!");
//       console.log(reset);
      
//      },
//        (error) => {
//          alert("Email not sent. Please try again later.");
//          console.log(error);
//        });
// })


function sendMail() {
   // Prevent default form submission behavior
   event.preventDefault();

   // Retrieve form values
   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email").value.trim();
   const message = document.getElementById("message").value.trim();

   // Validate form inputs
   if (!name || !email || !message) {
       alert("Please fill out all fields before submitting.");
       return;
   }

   // Define service and template IDs
   const serviceId = "service_rql0puj"; // Replace with your actual service ID
   const templateId = "template_ikdf6mq"; // Replace with your actual template ID

   // Send email using EmailJS
   emailjs
       .send(serviceId, templateId, {
           name: name,
           email: email,
           message: message,
       })
       .then(
           (response) => {
               // Clear form fields on success
               document.getElementById("name").value = "";
               document.getElementById("email").value = "";
               document.getElementById("message").value = "";
               alert("Email Sent Successfully!");
               console.log("SUCCESS!", response.status, response.text);
           },
           (error) => {
               // Handle errors
               alert("Email not sent. Please try again later.");
               console.error("FAILED...", error);
           }
       );
}