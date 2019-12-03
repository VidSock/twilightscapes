import React from 'react'
import { navigate } from 'gatsby-link'
import { FaEnvelope } from 'react-icons/fa'


// const Contact = class extends React.Component {
//   render() {
//     return (
     
//     )
//   }
// }

// export default Contact




function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
       .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      
        <section className="section">
          <div className="container innerpanel" style={{padding: '0 1rem',}}>
            <div className="content" style={{padding: '0 0 15px 0'}}>

              

              

              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                id="popcontact-form"
              >
                <h3 id="contact" name="contact" style={{padding: '.5rem 0', textAlign: 'center', fontSize: '150%',}}>Contact Todd<br /><span style={{fontSize: '80%', display: 'none',}}>Please fill out the form below:</span></h3>
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="form-name">upload</label><input type="hidden" name="form-name" value="file-upload" />
                </div>

                <div className="form">
                <div className="field half left">
                <label htmlFor="name" style={{padding: '0', margin: '0',}}>Your name:</label>
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                      placeholder="Name"
                    />
                <label htmlFor="email" style={{padding: '0', margin: '0',}}>Your email:</label>
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                      placeholder="your@email.com"
                    />
                    <label htmlFor="attachment" style={{padding: '0', margin: '0',}}>Upload file:</label>
                    <div className="upload" style={{ border: '0px solid', padding: '12px', borderRadius: '5px', boxShadow: '0px 0px 1px 1px #999', color: '#999',}}>
                    <label htmlFor="attachment" style={{padding: '0', margin: '0 2.5% 0 0', float: 'left', width: '58%', color: '#333',}}>
                    ZIP files preferred
                    <input
                        className="file-input hidden"
                        type="file"
                        id="attachment"
                        name="attachment"
                        onChange={this.handleAttachment}
                      />
                      </label>
                      
<label className="upload" htmlFor="attachment" style={{background: '#eee', width: '48%', justifyContent: 'center', color: '#333', padding: '5px 15px', textAlign: 'center', borderRadius:'4px', margin: '0 auto', fontSize: '70%', whiteSpace: 'nowrap',}}  >Select File</label></div>
                </div>

                <div className="field half right">
<label className="label" htmlFor={'message'} style={{padding: '0', margin: '0',}}>
                    Your message
                  </label>
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                      placeholder="Message"
                    />
                    

                      
                  </div>
                  </div>
                
                <div style={{fontSize: '70%', padding: '0 3%', margin: '0 0 1rem 0', textAlign: 'center',}}> <label htmlFor={'consent'}><input type="checkbox"  name={'consent'} required={true} style={{transform: 'scale(2)', margin: '0 10px 0 0', padding: '0',}} />  I want to communicate by email or text.</label></div>
               
<div className="special grad"  style={{color:'#fff', textDecoration:'none', display:'flex', justifyContent:'center', position:'relative', width:'230px', margin:'0 auto', padding:'0 1rem 0px 1rem',}}>
                
                <input type="submit" value="Send Message" className=" grad" style={{background:'transparent', border:'none', color:'#fff', cursor:'pointer', width:'90%', float:'left',}} />
                <FaEnvelope style={{position: 'relative', top: '5px', right: '-5px', color: '#fff', fontSize: '120%',}} />
                
                </div>
                
                <div style={{fontSize: '70%', padding: '0px 3%', marginTop:'20px', textAlign: 'center',}}><a style={{textAlign: 'center', paddingTop: '0', paddingBottom: '0', textDecoration: 'underline', color:'inherit',}} href="/privacy">Privacy Policy</a>
                </div>
                
                
                
                
              </form>
              
            </div>
          </div>
        </section>      
      
    )
  }
}