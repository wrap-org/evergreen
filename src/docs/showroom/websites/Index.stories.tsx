import { DataStory } from './DataStory';
import { ProjectLandingPage } from './ProjectLandingPage';
import { SecondLevel } from './SecondLevel';
import { ThirdLevel } from './ThirdLevel';
import { TopLevel } from './TopLevel';

export default {
  title: 'Showroom/Websites',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
};

export const TopLevelStory = {
  render: TopLevel,
  name: 'Top level',
};

export const SecondLevelStory = {
  render: SecondLevel,
  name: 'Second level',
};

export const ThirdLevelStory = {
  render: ThirdLevel,
  name: 'Third level',
};

export const ProjectLandingPageStory = {
  render: ProjectLandingPage,
  name: 'Project landing page',
};

export const DataStoryComponent = {
  render: DataStory,
  name: 'Data story',
};
