import React from 'react'

const Contactus = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "904b0b0e-6137-4b80-bb13-a92a4b89c210");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='Contact'>
       
       <div className='ContactForm'>
       <div className='TextArea'>
        <div className='MessageTitle'>Send us a message</div>
        <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit quasi aspernatur, eaque doloremque itaque perspiciatis nihil tempora cupiditate molestiae asperiores illo expedita recusandae ullam incidunt et, esse fugit rerum!</p>
        <p className='link'>Conatct@Gmail.dev</p>
        <p className='Phnumber'>+901-2948-039</p>
        <p>77MashcuksBuv.Campus<br/><span>MA 0231,United States</span></p>
        
       </div>

       <div className='FormArea'>
        <form onSubmit={onSubmit}>
        <div>
            <label className='Label'>Your Name</label>
            <input type='text' name='name' placeholder='Enter your Name' required/>
        </div>

        <div>
            <label className='Label'>Phone Number</label>
            <input type='tel' name='phoneNumber' placeholder='Enter your Phone Number'/>
        </div>

        <div>
            <label className='Label'>Your Message</label>
            <textarea  name='message' placeholder='Enter your Message' rows={5}/>
        </div>

        <button type='submit' className='btn submitBtn'>Submit Now</button>
        </form>
        <p className='textt'>{result}</p>
       </div>
       </div>
    </div>
  )
}

export default Contactus

// web3form 