import React, { useState } from 'react'

function Recruitmentform() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

const handleSubmit = (e) => {
    e.preventDefault()

    alert('my name is ' + name + ' and age is ' + age)  //

}

  return (
    <section className="container">
            <form action="container" onSubmit={handleSubmit}>
                <div>

                <label htmlFor="name">Name</label>
                <input type="text"  
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />
                </div>

                <div>
                 <label htmlFor="Age">Age</label>
                <input type="text"  
                value={age} 
                onChange={(e) => setAge(e.target.value)}
                />

                </div>
                <button type='submit'> Submit application</button>
            </form>
    </section>
  )
}

export default Recruitmentform;