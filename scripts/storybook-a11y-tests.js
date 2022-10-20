const path = require('path');

const { A11yTestRunner } = require('@shopify/storybook-a11y-test');

const storybookTestA11y = async () => {
  const buildDir = path.join(__dirname, '../storybook-static');

  const testRunner = new A11yTestRunner(buildDir);

  try {
    // Grab all Story IDs
    const storyIds = await testRunner.collectEnabledStoryIdsFromIFrame();

    // Run tests on all stories in `storyIds`
    const results = await testRunner.testStories({
      storyIds,
      timeout: 30000,
    });

    if (results.length) {
      console.error('‼️  Accessibility violations found');
      // eslint-disable-next-line no-console
      console.log(results.join('\n'));
      process.exitCode = 1;
    } else {
      // eslint-disable-next-line no-console
      console.log('🧚  Accessibility tests passed');
    }
  } finally {
    await testRunner.teardown();
  }
};

storybookTestA11y();
