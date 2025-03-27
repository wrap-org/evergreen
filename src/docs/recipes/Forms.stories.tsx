import React from 'react';

export default {
  title: 'Recipes/Forms',
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [
          {
            // Temporary disable
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
};

export function SectionWithBoxAndForm() {
  return (
    <>
      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrapper size="xl">
          <h2 className="evg-text-size-heading-xl evg-spacing-bottom-lg">
            Section with a box and a form
          </h2>
          <evg-box class="evg-theme-default" radius="lg" padding="lg">
            <h3 className="evg-text-size-heading-md evg-spacing-bottom-md">
              Please answer these questions
            </h3>

            <form>
              {[1, 2, 3, 4, 5].map((i) => (
                <evg-form-group
                  orientation="horizontal"
                  class="evg-spacing-bottom-md"
                  key={i}
                >
                  <evg-grid align-items="center">
                    <evg-grid-item grow>
                      <evg-label>
                        <label htmlFor={`question-${i}`}>Question {i}</label>
                      </evg-label>
                    </evg-grid-item>
                    <evg-grid-item>
                      <evg-icon icon="circle-information" variant="default" />
                    </evg-grid-item>
                  </evg-grid>
                  <evg-input>
                    <input
                      id={`question-${i}`}
                      name={`question-${i}`}
                      type="text"
                      placeholder="Value"
                    />
                  </evg-input>
                </evg-form-group>
              ))}

              <evg-grid justify-content="flex-end">
                <evg-grid-item>
                  <evg-button variant="primary">
                    <button type="submit">Save and continue</button>
                  </evg-button>
                </evg-grid-item>
              </evg-grid>
            </form>
          </evg-box>
        </evg-wrapper>
      </evg-section>
      <evg-section padding="fluid">
        <evg-wrapper size="xl">
          <h2 className="evg-text-size-heading-xl evg-spacing-bottom-lg">
            Section with a box and a form
          </h2>
          <evg-box class="evg-theme-earth-light" radius="lg" padding="lg">
            <h3 className="evg-text-size-heading-md evg-spacing-bottom-md">
              Please answer these questions
            </h3>

            <form>
              {[1, 2, 3, 4, 5].map((i) => (
                <evg-form-group
                  orientation="horizontal"
                  class="evg-spacing-bottom-md"
                  key={i}
                >
                  <evg-grid align-items="center">
                    <evg-grid-item grow>
                      <evg-label>
                        <label htmlFor={`question-${i}`}>Question {i}</label>
                      </evg-label>
                    </evg-grid-item>
                    <evg-grid-item>
                      <evg-icon icon="circle-information" variant="default" />
                    </evg-grid-item>
                  </evg-grid>
                  <evg-input>
                    <input
                      id={`question-${i}`}
                      name={`question-${i}`}
                      type="text"
                      placeholder="Value"
                    />
                  </evg-input>
                </evg-form-group>
              ))}

              <evg-grid justify-content="flex-end">
                <evg-grid-item>
                  <evg-button variant="primary">
                    <button type="submit">Save and continue</button>
                  </evg-button>
                </evg-grid-item>
              </evg-grid>
            </form>
          </evg-box>
        </evg-wrapper>
      </evg-section>
      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrapper size="xl">
          <h2 className="evg-text-size-heading-xl evg-spacing-bottom-lg evg-text-align-center">
            Section with a box and a form
          </h2>
        </evg-wrapper>
        <evg-wrapper size="sm">
          <evg-box class="evg-theme-default" radius="lg" padding="lg">
            <h3 className="evg-text-size-heading-md evg-spacing-bottom-lg">
              Welcome back
            </h3>

            <form>
              <evg-form-group class="evg-spacing-bottom-lg">
                <evg-grid align-items="center">
                  <evg-grid-item grow>
                    <evg-label>
                      <label htmlFor="email">Email</label>
                    </evg-label>
                  </evg-grid-item>
                  <evg-grid-item>
                    <evg-icon icon="circle-information" variant="default" />
                  </evg-grid-item>
                </evg-grid>
                <evg-input>
                  <input id="email" name="email" type="email" />
                </evg-input>
              </evg-form-group>

              <evg-form-group class="evg-spacing-bottom-lg">
                <evg-grid align-items="center">
                  <evg-grid-item grow>
                    <evg-label>
                      <label htmlFor="password">Password</label>
                    </evg-label>
                  </evg-grid-item>
                  <evg-grid-item>
                    <evg-icon icon="circle-information" variant="default" />
                  </evg-grid-item>
                </evg-grid>
                <evg-input>
                  <input id="password" name="password" type="password" />
                </evg-input>
              </evg-form-group>

              <evg-button variant="primary" width="full-width">
                <button type="submit">Log in</button>
              </evg-button>
            </form>
          </evg-box>
        </evg-wrapper>
      </evg-section>
    </>
  );
}
