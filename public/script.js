// const submit = document.getElementById('submit')
// const addTask = document.getElementById("taskform")

// submit.addEventListener('click', async (event) => {
//     event.preventDefault()
//     const title = document.getElementById('title').value
//     const body = document.getElementById('description').value
//     console.log(title+body)

//     const response = await fetch('/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ title, body })
//     });
    
//     const data = await response.json();
//     if (data.success) {
//         document.getElementById('title').value = "";
//         document.getElementById('description').value = "";
//     } else {
//         // Display error message
//         alert('Task creation failed. Please try again.');
//     }
    


// })