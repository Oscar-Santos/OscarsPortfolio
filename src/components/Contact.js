// import React from 'react'
// import Phone from '../assets/phone.jpeg'
// import Email from '../assets/gmail.png'

// const Contact = () => {
//   return (
    
//     <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        
        
//         <form method='POST' action="https://getform.io/f/00f63e9f-1505-4c0f-b389-97c0e6464773" className='flex flex-col max-w-[600px] w-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
//                     <br />
//                     <br />
//                     <br />
//                     <br />
//                    Contact Information
//                 </p>

//                 <p className='text-gray-300 py-4 text-2xl'>
                    
                    
//                 <i class="fa fa-phone">
//                     <div style={{display: 'flex', alignItems:'center'}}>
//                     <img src={Email} width='35px' alt="" />
//                         <span style={{paddingLeft: '20px'}}>
//                         oscar303data@gmail.com
//                         </span> 
//                     </div>
//                 </i>
//                 <i class="fa fa-phone">
//                     <div style={{display: 'flex', alignItems:'center'}}>
//                     <img src={Phone} width='35px' alt="" />
//                          <span style={{paddingLeft: '20px'}}>
//                             720-649-2594
//                         </span> 
//                     </div>
//                 </i>
//                 <br />
//                 Submit the form below with your name, email and a message: 
//                 </p>

//             </div>
//             <input className='bg-[#ccd6f6] p-2' type="text" placeholder='name' name='name' />
//             <br />
//             <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
//             <br />
//             <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="Message" id="" cols="30" rows="8">
//             </textarea>
//             <br />
//             <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-6 py-4 my-8 mx-auto flex items-center'>
//                 Submit
//             </button>

//         </form>
      
//     </div>
//   )
// }

// export default Contact


import React from "react";

function Contact() {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-8 pt-[100px]"
		>
			<form method="POST"
				action="https://getform.io/f/00f63e9f-1505-4c0f-b389-97c0e6464773"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
						Contact
					</p>

					<p className="text-2xl text-gray-300 py-4">Submit the form below with your name, email and a message: </p>
				</div>
				<input
					className="bg-[#ccd6f6]"
					type="text"
					placeholder="Name"
					name="name"
				></input>
				<input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
				<textarea
					className="bg-[#ccd6f6]"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
                <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Talk</button>
			</form>
		</div>
	);
}

export default Contact;