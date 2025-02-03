import React from 'react';

import FormGroup from 'components/react/composition/FormGroup/FormGroup';
import Icon from 'components/react/content/Icon/Icon';
import Button from 'components/react/controls/Button/Button';
import Input from 'components/react/controls/Input/Input';
import Label from 'components/react/controls/Label/Label';
import Radio from 'components/react/controls/Radio/Radio';
import Select from 'components/react/controls/Select/Select';

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
        <div className="m-spacing-bottom-lg" />
        <FormGroup className="m-spacing-bottom-md">
          <evg-grid wrap="wrap">
            <evg-grid-item small-mobile="12" small-tablet="6">
              <Label htmlFor="sector">Sector</Label>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" small-tablet="6">
              <Input id="sector" placeholder="Sector" />
            </evg-grid-item>
          </evg-grid>
        </FormGroup>
        <FormGroup className="m-spacing-bottom-md">
          <evg-grid wrap>
            <evg-grid-item small-mobile="12" small-tablet="6">
              <Label htmlFor="region">Region</Label>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" small-tablet="6">
              <Select id="region">
                <option>England</option>
              </Select>
            </evg-grid-item>
          </evg-grid>
        </FormGroup>
        <FormGroup className="m-spacing-bottom-lg">
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
