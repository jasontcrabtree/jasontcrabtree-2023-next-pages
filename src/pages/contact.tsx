import Link from 'next/link';
import React from 'react';

function ContactPage() {
  return (
    <main className='px-6 py-0 flex flex-col gap-4'>
      <header className="">
        <h1 className="">
          Getting in touch 👋
        </h1>
        <p>
          Hello! If you want to talk about a role you're recruiting or a
          freelance contract, I'd love to learn more. Please contact me with the
          form below.
        </p>
        <p>
          If you want to chat about a personal project, I'd love to hear about
          that too! Get in touch on twitter at{' '}
          <Link href="https://twitter.com/jasontcrabtree">@jasontcrabtree</Link>,{' '}
          <Link href="mailto:jasontcrabtree@gmail.com">email</Link>, or the contact
          form below.
        </p>
      </header>
      <section className="">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact-success">
          <fieldset className="p-2 flex flex-col gap-2">
            <h2>Contact Form</h2>
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden" hidden>
              <label htmlFor="bot-field">
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </div>
            <div className="sender-info">
              <label htmlFor="name">
                Your Name
                <input type="text" name="name" />
              </label>
            </div>
            <div className="sender-info">
              <label htmlFor="email">
                Your Email*
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                />
              </label>
            </div>
            <div>
              <label htmlFor="project">
                Project Type:
                <select name="project" id="project">
                  <option value="website-development">
                    Website Development
                  </option>
                  <option value="website-design">Website Design</option>
                  <option value="mobile-design">Mobile Design</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="budget">
                Available Budget
                <input type="text" name="budget" placeholder="$" />
              </label>
            </div>
            <div className="message-wrapper">
              <label htmlFor="message">
                Project Details
                <textarea name="message" rows={4} />
              </label>
            </div>
            <div>
              <button className="base-button--style" type="submit">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
