import { Meta } from '@storybook/react-vite';
import React from 'react';

export default {
  title: 'Foundations/Utilities/Longform',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The longform class can be added to a wrapper around any longform content, such as from a CMS WYSIWYG to ensure that the text is easy to read.',
      },
    },
  },
} satisfies Meta;

export function Longform() {
  return (
    <evg-section padding="fluid">
      <evg-wrapper size="lg">
        <div className="evg-longform">
          <h2>About us</h2>
          <p>
            Our mission is to embed circular living in every boardroom and every
            home.
          </p>
          <p>
            WRAP is a global environmental action NGO transforming our broken
            product and food systems to create Circular Living for the benefit
            of climate, nature and people.
          </p>
          <p>
            The old approach of ‘take, make, dispose&rsquo; is the major cause
            of inequality, greenhouse gas emissions and mountains of waste,
            polluting our water and destroying biodiversity.  ​
          </p>
          <p>
            Food, textiles and manufactured products account for nearly 50% of
            global greenhouse gas emissions.{' '}
          </p>
          <h3>We offer a new way of doing things.</h3>
          <p>
            By examining sustainability challenges through the lens of
            people&rsquo;s day-to-day lives, we design transformative solutions.
            We call this approach Circular Living.
          </p>
          <p>
            We are a non-governmental organisation rooted in technical
            expertise, impartial evidence base and independent convening power.
            For over twenty years, WRAP has delivered programmes to benefit the
            environment — from reducing CO2 emissions and waste to restoring
            nature and enhancing people&rsquo;s lives.
          </p>
          <h3>WRAP is on the side of the doers.</h3>
          <p>
            We believe in achieving impact by bringing people together and
            harnessing the power of businesses, NGOs and governments to create
            the systemic changes that our planet and communities urgently need.
          </p>

          <figure>
            <blockquote>
              <p>
                Food, textiles and manufactured products account for nearly 50%
                of global greenhouse gas emissions. Addressing the problems in
                our food system and creating a circular economy are key to
                tackling these huge emitters of greenhouse gases. We must
                embrace circular living in every boardroom and every home.
              </p>
            </blockquote>
            <figcaption>
              <strong>Harriet Lamb</strong> – Chief Executive Officer, WRAP
            </figcaption>
          </figure>

          <h2>Where we work</h2>
          <p>
            Our origins and a significant amount of our work are in the UK,
            where we were established in 2000. 
          </p>
          <p>We have:</p>
          <ul>
            <li>
              live projects and active partner collaborations all around the
              world from South Africa to Mexico and from Indonesia to the USA.
            </li>
            <li>
              offices in <a href="https://wrap.ngo">London</a>,{' '}
              <a href="https://wrap.ngo">Washington</a>,{' '}
              <a href="https://wrap.ngo">D.C.</a> and{' '}
              <a href="https://wrap.ngo">Adelaide</a>.
            </li>
            <li>
              the footprint and the contacts around the world to deliver on a
              global scale.
            </li>
          </ul>
          <h3>Our impact</h3>
          <h4>Transforming the world&rsquo;s food systems</h4>
          <p>
            We&rsquo;re changing the way food is produced and consumed —
            reducing costs to the environment, to businesses and to people.
          </p>
          <h4>Transforming the world&rsquo;s plastic systems</h4>
          <p>
            We&rsquo;re redesigning the plastics system, across the value chain
            — preventing waste and keeping the material out of the environment.
          </p>
          <h4>Transforming the world&rsquo;s textiles systems</h4>
          <p>
            We&rsquo;re transforming the way that textiles are made, bought and
            used — decreasing emissions, lowering water use and cutting
            pollution.
          </p>
          <h4>Transforming our systems to accelerate the circular economy</h4>
          <p>
            We&rsquo;re leading the world away from a ‘take-make-dispose&rsquo;
            culture to a ‘design-make-reuse&rsquo; approach — radically reducing
            waste and carbon emissions from everyday products.​
          </p>

          <h2>Lists</h2>

          <h3>Ordered list</h3>
          <ol>
            <li>
              <strong>Transforming the world&rsquo;s food systems</strong> –
              We&rsquo;re changing the way food is produced and consumed —
              reducing costs to the environment, to businesses and to people.
            </li>
            <li>
              <strong>Transforming the world&rsquo;s plastic systems</strong> –
              We&rsquo;re redesigning the plastics system, across the value
              chain — preventing waste and keeping the material out of the
              environment.
            </li>
            <li>
              <strong>Transforming the world&rsquo;s textiles systems</strong> –
              We&rsquo;re transforming the way that textiles are made, bought
              and used — decreasing emissions, lowering water use and cutting
              pollution.
            </li>
            <li>
              <strong>
                Transforming our systems to accelerate the circular economy
              </strong>{' '}
              – We&rsquo;re leading the world away from a
              ‘take-make-dispose&rsquo; culture to a ‘design-make-reuse&rsquo;
              approach — radically reducing waste and carbon emissions from
              everyday products.​
            </li>
          </ol>

          <h3>Unordered list</h3>

          <p>We are:</p>

          <ul>
            <li>
              <strong>Changing</strong> the way food is produced and consumed —
              reducing costs to the environment, to businesses and to people.
            </li>
            <li>
              <strong>Redesigning</strong> the plastics system, across the value
              chain — preventing waste and keeping the material out of the
              environment.
            </li>
            <li>
              <strong>Transforming</strong> the way that textiles are made,
              bought and used — decreasing emissions, lowering water use and
              cutting pollution.
            </li>
            <li>
              <strong>Leading</strong> the world away from a{' '}
              <q>take-make-dispose</q> culture to a<q>design-make-reuse</q>{' '}
              approach — radically reducing waste and carbon emissions from
              everyday products. ​
            </li>
          </ul>

          <h3>Definition list</h3>

          <dl>
            <dt>Food systems</dt>
            <dd>
              We&rsquo;re changing the way food is produced and consumed —
              reducing costs to the environment, to businesses and to people.
            </dd>

            <dt>Plastic systems</dt>
            <dd>
              We&rsquo;re redesigning the plastics system, across the value
              chain — preventing waste and keeping the material out of the
              environment.
            </dd>

            <dt>Textiles systems</dt>
            <dd>
              We&rsquo;re transforming the way that textiles are made, bought
              and used — decreasing emissions, lowering water use and cutting
              pollution.
            </dd>

            <dt>Circular economy</dt>
            <dd>
              We&rsquo;re leading the world away from a <q>take-make-dispose</q>{' '}
              culture to a <q>design-make-reuse</q> approach — radically
              reducing waste and carbon emissions from everyday products.​
            </dd>
          </dl>

          <h2>Quotes</h2>

          <h3>Blockquote</h3>

          <figure>
            <blockquote>
              <p>
                Food, textiles and manufactured products account for nearly 50%
                of global greenhouse gas emissions. Addressing the problems in
                our food system and creating a circular economy are key to
                tackling these huge emitters of greenhouse gases. We must
                embrace circular living in every boardroom and every home.
              </p>
            </blockquote>
            <figcaption>
              <strong>Harriet Lamb</strong> – Chief Executive Officer, WRAP
            </figcaption>
          </figure>

          <h3>Inline quote</h3>

          <p>
            When the WRAP Board of Trustees met, Sebastian Munden (the Chair)
            said{' '}
            <q>
              WRAP has built a reputation for forging collaborative partnerships
              which drive change around the world. We will unite partners in a
              shared network to access best practice and accelerate delivery.
            </q>{' '}
            as part of his opening speech.
          </p>
        </div>
      </evg-wrapper>
    </evg-section>
  );
}
