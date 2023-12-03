import React from 'react';

function ColleagueQuotes() {
  return (
    <div>
      <blockquote className="quote-item">
        <p>
          <span className="block-quote-callout">“</span>Jason has a creative but
          practical out of the box way of thinking and to top it off, a relaxed
          demeanor that makes you naturally feel at ease around him.
          <span className="block-quote-close">”</span>
        </p>
        <footer>
          <cite className="quote-name--style">Dini Paranagama</cite>
          <div className="quote-details-text--layout">
            <span>
              Digital Product Manager at IAG Insurance, NZ,{' '}
              <a
                href="https://www.linkedin.com/in/dini-paranagama"
                aria-label="navigates to Dini Paranagama's CV, who gave the above quote">
                LinkedIn
              </a>
            </span>
          </div>
        </footer>
      </blockquote>

      <blockquote className="quote-item">
        <p>
          <span className="block-quote-callout">“</span>When I think about Jason
          I think of his wealth of knowledge and intellect.
        </p>
        <p>
          He automatically creates a safe space to share, learn and collaborate;
          inviting others opinions before his own, Jason actively asks questions
          to understand the ‘why’ and seeks to see things from a different
          perspective.
        </p>
        <p>
          Jason has a creative yet pragmatic approach & you can rely on him to
          stand up for what’s right.
          <span className="block-quote-close">”</span>
        </p>
        <footer>
          <cite className="quote-name--style">Natalie van Baarlen</cite>
          <div className="quote-details-text--layout">
            <span>
              Customer Experience Design Lead at IAG Insurance, NZ,{' '}
              <a
                href="https://www.linkedin.com/in/natalie-van-baarlen-60ab73107"
                aria-label="navigates to Natalie Van Baarlen's LinkedIn, who gave the above quote">
                LinkedIn
              </a>
            </span>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}

export default ColleagueQuotes;
