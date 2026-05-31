import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-success mb-3">Get In Touch</h2>
          <p className="text-secondary">Have a project in mind? Let's work together.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            <div className="card bg-black border-success p-4 p-md-5">
              <form>
                <div className="row g-3">
                  
                  <div className="col-md-6">
                    <label className="form-label text-secondary">Your Name</label>
                    <input 
                      type="text" 
                      className="form-control bg-dark text-white border-secondary" 
                      placeholder="Haneef"
                      required 
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-secondary">Your Email</label>
                    <input 
                      type="email" 
                      className="form-control bg-dark text-white border-secondary" 
                      placeholder="you@email.com"
                      required 
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-secondary">Message</label>
                    <textarea 
                      className="form-control bg-dark text-white border-secondary" 
                      rows="5" 
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-success px-5 py-2">
                      Send Message
                    </button>
                  </div>

                </div>
              </form>

              <div className="text-center mt-4 pt-4 border-top border-secondary">
                <p className="text-secondary mb-2">Or reach me directly</p>
                <p className="mb-1">
                  <i className="bi bi-envelope text-success me-2"></i>
                  illiyashaneef@gmail.com
                </p>
                <p>
                  <i className="bi bi-telephone text-success me-2"></i>
                  +234 090 642 966 23
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;