import React from 'react';

import FormGroup from 'components/react/composition/FormGroup/FormGroup';
import Icon from 'components/react/content/Icon/Icon';
import Button from 'components/react/controls/Button/Button';
import Label from 'components/react/controls/Label/Label';
import Radio from 'components/react/controls/Radio/Radio';

export default {
  title: 'Recipes/Forms',
  parameters: {
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

export function Form() {
  return (
    <evg-wrap size="lg">
      <form>
        <h2>About your business</h2>
        <evg-grid gap="xs">
          <evg-grid-item>
            <Icon color="positive" icon="circle-check" />
          </evg-grid-item>
          <evg-grid-item grow shrink>
            Your selections have been saved in your browser to save you time in
            future.
          </evg-grid-item>
        </evg-grid>
        <div className="evg-spacing-bottom-lg" />
        <FormGroup className="evg-spacing-bottom-md">
          <evg-grid wrap="wrap">
            <evg-grid-item small-mobile="12" small-tablet="6">
              <Label htmlFor="sector">Sector</Label>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" small-tablet="6">
              <evg-input>
                <input id="sector" placeholder="Sector" />
              </evg-input>
            </evg-grid-item>
          </evg-grid>
        </FormGroup>
        <FormGroup className="evg-spacing-bottom-md">
          <evg-grid wrap="wrap">
            <evg-grid-item small-mobile="12" small-tablet="6">
              <Label htmlFor="region">Region</Label>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" small-tablet="6">
              <evg-input>
                <select id="region">
                  <option>England</option>
                </select>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </evg-input>
            </evg-grid-item>
          </evg-grid>
        </FormGroup>
        <FormGroup className="evg-spacing-bottom-lg">
          <evg-grid wrap="wrap">
            <evg-grid-item small-mobile="12" small-tablet="6">
              <Label htmlFor="multiple" as="span" id="sites-label">
                Multiple sites
              </Label>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" small-tablet="6">
              <div
                role="radiogroup"
                aria-labelledby="sites-label"
                id="multiple"
              >
                <evg-grid>
                  <evg-grid-item small-mobile="6">
                    <Radio name="radio" id="yes">
                      Yes
                    </Radio>
                  </evg-grid-item>
                  <evg-grid-item small-mobile="6">
                    <Radio name="radio" id="no">
                      No
                    </Radio>
                  </evg-grid-item>
                </evg-grid>
              </div>
            </evg-grid-item>
          </evg-grid>
        </FormGroup>
        <evg-grid direction="row-reverse">
          <evg-grid-item small-mobile="6">
            <Button type="primary" block>
              Save
            </Button>
          </evg-grid-item>
          <evg-grid-item small-mobile="6">
            <Button block>Skip</Button>
          </evg-grid-item>
        </evg-grid>
      </form>
    </evg-wrap>
  );
}
