import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

    return (
      <>       
    <div className="my-8">
      <div className='bg-black text-white mx-8 text-4xl p-2 flex justify-center font-bold border-2 border-black rounded-lg'>CONTACT US</div>
        <div className='flex flex-wrap justify-around bg-black text-white mx-8 mb-5 border-2 border-black rounded-lg'>
                <div className='pt-5 text-xl pb-10 mx-2'>
                    Got any Queries ? We are happy to help
                    <br/>Please Fill the Following form<br/><br/>
                    Dr. Chandra Prakash,<br/>
                    Assistant Professor,<br/>
                    Department of Computer Science and Engineering<br/>
                    NATIONAL INSTITUTE OF TECHNOLOGY DELHI<br/>
                    Sector A-7, Institutional Area Narela, Delhi-110040, INDIA<br/>
                    <span className='font-bold '>Website</span> www.nitdelhi.ac.in<br/>
                    <span className='font-bold'>Tele:</span> +011-33861128 (O),Mobile: +91-7568599806<br/>
                    <span className='font-bold'>Email-id:</span> cprakash [at] nitdelhi.ac.in , cse.cprakash [at] gmail.com,<br/>
                    <div className=' pb-5'><span className='font-bold'>Contact No: </span>
                    <span >+ 91-7568599806</span>
                    </div>
               </div>
                <div className='pt-5 text-white text-xl flex pb-10 px-4'>
      <Box sx={{display: "flex",flexDirection: "column",alignItems: "center",maxWidth: 600,mx: "auto", p: 2,border: "2px solid white",borderRadius: "12px",boxShadow: 1,background:"white" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{bg:"white",}}
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#111",
              },
            }}
          >
            Submit
          </Button>
        </form>
      
    </Box>
            </div>
      </div>
    </div>
          
      </>
    )
  }
  export default Contact;