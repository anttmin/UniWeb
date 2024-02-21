import React from 'react'
import { Form } from 'react-router-dom'

const Postform = () => {
  return (
    <section className='Form'>
         <h4>Create Post Now</h4>
        <Form method='post'>
        <div className='form-input Input' >
            <label htmlFor='form-title'>Title</label>
            <input type='text' id='form-title' name='title'/>
        </div>

        <div className='form-input Input'>
            <label htmlFor='form-image '>Image</label>
            <input type='text' id='form-image' name='image'/>
        </div>

        <div className='form-date Input'>
            <label htmlFor='form-date '>Date</label>
            <input type='date' id='form-date' name='date'/>
        </div>

        <div>
            <label htmlFor='form-description Input'>Description</label>
            <textarea type='text' rows={2} cols={20} id='form-description' name='description' />
        </div>

        <div>
           <button>Post</button>
        </div>
    </Form> 
    </section>
  )
}

export default Postform