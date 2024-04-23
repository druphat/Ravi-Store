// eslint-disable-next-line
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.497462804113!2d75.63713489692194!3d32.27649986462043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f466e5242d7%3A0x3efc94d97e4103b8!2sLovely%20Gift%20Centre!5e0!3m2!1sen!2sin!4v1710176466921!5m2!1sen!2sin" 
    width="100%" 
    height="450" 
    style={{border:0}}
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">

    </iframe>
    <div className = "container">
      <div className = "contact-form">
        <form action = "https://formspree.io/f/xyyrpnlj" method = "POST" className="contact-inputs">
          <input type ="text" placeholder="username" name="username" required autoComplete="off" />
          <input type ="email" name="Email" placeholder="Email" autoComplete="off" required />
          <textarea name="Message" cols="30" rows="10" required autoComplete="off"  placeholder="Enter your Message"></textarea>
          <input type="submit" value="Send Me"/>
        </form>
        
      </div>

    </div>

  </Wrapper>;
};

export default Contact;
