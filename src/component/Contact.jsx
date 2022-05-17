// import React from "react"; 
// import { Container, Row, Col } from "react-bootstrap";
// import { contactConfig } from './content_option'

// export default function Contact() {
  

//   return (
//       <Container>
     
//         <Row className="mb-5 mt-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">Contact Us</h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row className="sec_sp">
//           <Col lg="5" className="mb-5">
//             <h3 className="color_sec py-4">Get in touch</h3>
//             <address>
//               <strong>Email:</strong>{" "}
//               <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//                 {contactConfig.YOUR_EMAIL}
//               </a>
//               <br />
//               <br />
//               {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//                 <p>
//                   <strong>Phone:</strong> {contactConfig.YOUR_FONE}
//                 </p>
//               ) : (
//                 ""
//               )}
//             </address>
//             <p>{contactConfig.description}</p>
//           </Col>
//           <Col lg="7" className="d-flex align-items-center">
//             <form  className="contact__form w-100">
//               <Row>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control mb-2"
//                     id="name"
//                     name="name"
//                     placeholder="Name" 
//                     type="text"
//                     required 
//                   />
//                 </Col>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control rounded-0"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     type="email" 
//                     required 
//                   />
//                 </Col>
//               </Row>
//               <textarea
//                 className="form-control rounded-0"
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5" 
//                 required
//               ></textarea>
//               <br />
//               <Row>
//                 <Col lg="12" className="form-group">
//                   <button className="btn btn-secondary" type="submit"> 
//                   Send
//                   </button>
//                 </Col>
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//   );
// }



//////////////////////////////////////////////////////////////////////


import React from 'react'

 const Contact = () => {
  return (
    <>
    <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3 mt-1">
            <div class="card">
                <div class="card-header bg-primary text-white"><i class="fa fa-envelope"></i> Contact us.
                </div>
                <div class="card-body bg-white">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="6" required></textarea>
                        </div>
                        <div class="mx-auto">
                        <button type="submit" class="btn btn-primary text-right">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>

 {/* {/ Footer /} */}
<footer class="text-light">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-4 col-xl-3">
                <h5>About</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <p class="mb-0">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto">
                <h5>Informations</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul class="list-unstyled">
                    <li><a href="">Electronics</a></li>
                    <li><a href="">Jewellery</a></li>
                    <li><a href="">Refrigrators</a></li>
                    <li><a href="">Purifiers</a></li>
                </ul>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto">
                <h5>Others links</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul class="list-unstyled">
                    <li><a href="">
                    <i className="fa fa-facebook-square text-primary bg-white" aria-hidden="true"></i>  facebook</a></li>
                    <li><a href="">
                    <i className="fa fa-instagram text-danger bg-white" aria-hidden="true"></i>  instagram</a></li>
                    <li><a href="">
                    <i className="fa fa-twitter  bg-primary"></i>  Twitter</a></li>
                    <li><a href="">
                    <i className="fa fa-edge bg-warning"></i> www.shopify.com</a></li>
                </ul>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3">
                <h5>Contact</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul class="list-unstyled">
                    <li><i class="fa fa-home mr-2"></i> My company</li>
                    <li><i class="fa fa-envelope mr-2"></i> email@example.com</li>
                    <li><i class="fa fa-phone mr-2"></i> + 33 12 14 15 16</li>
                    <li><i class="fa fa-print mr-2"></i> + 33 12 14 15 16</li>
                </ul>
            </div>
            <div class="col-12 copyright mt-3">
                <p class="float-left">
                    <a href="#">Back to top</a>
                </p>
                <p class="text-right text-muted">created with <i class="fa fa-heart"></i> by <a href="https://t-php.fr/43-theme-ecommerce-bootstrap-4.html"><i>t-react</i></a> | <span>v. 1.0</span></p>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default Contact;